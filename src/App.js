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

const Login = lazy(() => import("./routes/login/login.component"));
const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
const CreateLoginDetails = lazy(() =>
  import("./routes/create-login-details/create-login-details.component")
);
const CreateSubscription = lazy(() =>
  import("./routes/create-subscription/create-subscription.component")
);
const Welcome = lazy(() => import("./routes/welcome/welcome.component"));
const Account = lazy(() => import("./routes/account/account.component"));
const CustomerPortal = lazy(() =>
  import("./routes/customer-portal/customer-portal.component")
);
const UpdateLoginEmail = lazy(() =>
  import("./routes/update-login-email/update-login-email.component")
);
const UpdatePassword = lazy(() =>
  import("./routes/update-password/update-password.component")
);
const SubscriptionDetailsPage = lazy(() =>
  import("./routes/subscription-details/subscription-details.component")
);
const UsefulLinks = lazy(() =>
  import("./routes/useful-links/useful-links.component")
);
const DiaryTable = lazy(() =>
  import("./routes/diary/diary-table/diary-table.component")
);
const AddDiaryEntry = lazy(() =>
  import("./routes/diary/add-diary-entry/add-diary-entry.component")
);
const EditDiaryEntry = lazy(() =>
  import("./routes/diary/edit-diary-entry/edit-diary-entry.component")
);
const LessonsTable = lazy(() =>
  import("./routes/lessons/lessons-table/lessons-table.component")
);
const AddLessonEntry = lazy(() =>
  import("./routes/lessons/add-lesson-entry/add-lesson-entry.component")
);
const EditLessonEntry = lazy(() =>
  import("./routes/lessons/edit-lesson-entry/edit-lesson-entry.component")
);
const DeleteEntry = lazy(() =>
  import("./routes/delete-entry/delete-entry.component")
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
              <Route
                path="login"
                element={
                  !currentUser ? (
                    <Login />
                  ) : (
                    <Navigate replace to="/my-account" />
                  )
                }
              />
              <Route
                path="sign-up"
                element={
                  !currentUser ? (
                    <SignUp />
                  ) : (
                    <Navigate replace to="/my-account" />
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
                path="create-subscription"
                element={
                  !currentUser ? (
                    <CreateSubscription />
                  ) : (
                    <Navigate replace to="/welcome" />
                  )
                }
              />

              <Route path="welcome" element={currentUser && <Welcome />} />
              <Route
                path="my-account"
                element={currentUser ? <Account /> : null}
              />

              <Route
                path="customer-portal"
                element={currentUser && <CustomerPortal />}
              />

              <Route
                path="update-login-email"
                element={
                  currentUser ? (
                    <UpdateLoginEmail />
                  ) : (
                    <Navigate replace to="/login" />
                  )
                }
              />

              <Route
                path="update-password"
                element={
                  currentUser ? (
                    <UpdatePassword />
                  ) : (
                    <Navigate replace to="/login" />
                  )
                }
              />

              <Route
                path="subscription-details"
                element={currentUser && <SubscriptionDetailsPage />}
              />
              <Route
                path="useful-links"
                element={currentUser && <UsefulLinks />}
              />

              <Route path="diary" element={currentUser && <DiaryTable />} />
              <Route
                path="add-diary-entry"
                element={currentUser && <AddDiaryEntry />}
              />
              <Route
                path="edit-diary-entry"
                element={currentUser && <EditDiaryEntry />}
              />
              <Route path="lessons" element={currentUser && <LessonsTable />} />
              <Route
                path="add-lesson-entry"
                element={currentUser && <AddLessonEntry />}
              />
              <Route
                path="edit-lesson-entry"
                element={currentUser && <EditLessonEntry />}
              />
              <Route
                path="delete-entry"
                element={currentUser && <DeleteEntry />}
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
