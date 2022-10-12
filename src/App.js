import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";

import useCheckUserSession from "./hooks/use-check-user-session";

import { selectCurrentUser } from "./store/user/user.selector";

import ErrorFallback from "./components/error-fallback/error-fallback.component";
import Loader from "./components/loader/loader.component";
import Footer from "./components/footer/footer.component";
import Toolbar from "./components/toolbar/toolbar.component";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));
const Features = lazy(() => import("./routes/features/features.component"));
const Pricing = lazy(() => import("./routes/pricing/pricing.component"));
const AboutMe = lazy(() => import("./routes/about-me/about-me.component"));
const ContactMe = lazy(() =>
  import("./routes/contact-me/contact-me.component")
);
const Account = lazy(() => import("./routes/account/account.component"));
const Login = lazy(() => import("./routes/login/login.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const CreateLoginDetails = lazy(() =>
  import("./routes/create-login-details/create-login-details.component")
);
const CustomerCreation = lazy(() =>
  import("./routes/customer-creation/customer-creation.component")
);

const App = () => {
  useCheckUserSession();
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <GlobalStyle />
      <Toolbar />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="about-me" element={<AboutMe />} />
              <Route path="contact" element={<ContactMe />} />
              <Route path="my-account" element={<Account />} />

              <Route
                path="login"
                element={
                  !currentUser ? (
                    <Login />
                  ) : (
                    <Navigate replace to="/dashboard" />
                  )
                }
              />
              <Route
                path="sign-up"
                element={
                  !currentUser ? (
                    <SignUp />
                  ) : (
                    <Navigate replace to="my-account" />
                  )
                }
              />

              <Route
                path="create-login-details"
                element={
                  !currentUser ? (
                    <CreateLoginDetails />
                  ) : (
                    <Navigate replace to="/my-account" />
                  )
                }
              />

              <Route
                path="customer-creation"
                element={!currentUser && <CustomerCreation />}
              />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
