import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";


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
const AboutMe = lazy(() => import("./routes/about-me/about-me.component"))
const ContactMe = lazy(() => import("./routes/contact-me/contact-me.component"))

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Toolbar/>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="about-me" element={<AboutMe />} />
              <Route path="contact" element={<ContactMe />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default App;
