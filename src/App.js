import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { GlobalStyle } from "./global-styles";
import { Helmet, HelmetProvider } from "react-helmet-async";

import useCheckUserSession from "./hooks/use-check-user-session";
import useSubscriptionExpiredCheck from "./hooks/use-subscription-expired-check";

import { selectCurrentUser } from "./store/user/user.selector";

import CookieBanner from "./components/cookie-banner/cookie-banner.component";
import ErrorFallback from "./components/error-fallback/error-fallback.component";
import Loader from "./components/loader/loader.component";
import Footer from "./components/footer/footer.component";
import Toolbar from "./components/toolbar/toolbar.component";
import ScrollUpButton from "./components/scroll-up-button/scroll-up-button.component";
import ScrollToTopAuto from "./components/scroll-to-top-auto/scroll-to-top-auto.component";

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
// const SignUp = lazy(() => import("./routes/sign-up/sign-up.component"));
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
export const MoneyOptions = lazy(() =>
  import("./routes/money-options/money-options.component")
);
const IncomeTable = lazy(() =>
  import("./routes/income/income-table/income-table.component")
);
const AddIncomeEntry = lazy(() =>
  import("./routes/income/add-income/add-income-entry.component")
);
const EditIncomeEntry = lazy(() =>
  import("./routes/income/edit-income-entry/edit-income-entry.component")
);
const ExpensesTable = lazy(() =>
  import("./routes/expenses/expenses-table/expenses-table.component")
);
const AddExpensesEntry = lazy(() =>
  import("./routes/expenses/add-expenses/add-expenses-entry.component")
);
const EditExpenseEntry = lazy(() =>
  import("./routes/expenses/edit-expense-entry/edit-expense-entry.component")
);
const TotalExpensesWeekTable = lazy(() =>
  import(
    "./routes/total-expenses-week/total-expenses-week-table/total-expenses-week-table.component"
  )
);
const AddTotalExpensesWeekEntry = lazy(() =>
  import(
    "./routes/total-expenses-week/add-total-expenses-week/add-total-expenses-week-entry.component"
  )
);
const EditTotalExpensesWeekEntry = lazy(() =>
  import(
    "./routes/total-expenses-week/edit-total-expenses-week/edit-total-expenses-week.component"
  )
);
const TotalExpensesMonthTable = lazy(() =>
  import(
    "./routes/total-expenses-month/total-expenses-month-table/total-expenses-month-table.component"
  )
);
const AddTotalExpensesMonthEntry = lazy(() =>
  import(
    "./routes/total-expenses-month/add-total-expenses-month/add-total-expenses-month.component"
  )
);
const EditTotalExpensesMonthEntry = lazy(() =>
  import(
    "./routes/total-expenses-month/edit-total-expenses-month/edit-total-expenses-month-entry.component"
  )
);
const TotalExpensesYearTable = lazy(() =>
  import(
    "./routes/total-expenses-year/total-expenses-year-table/total-expenses-year-table.component"
  )
);
const AddTotalExpensesYearEntry = lazy(() =>
  import(
    "./routes/total-expenses-year/add-total-expenses-year/add-total-expenses-year.component"
  )
);
const EditTotalExpensesYearEntry = lazy(() =>
  import(
    "./routes/total-expenses-year/edit-total-expenses-year/edit-total-expenses-year.component"
  )
);
const PupilOptions = lazy(() =>
  import("./routes/pupil-options/pupil-options.component")
);
const PupilsTable = lazy(() =>
  import("./routes/pupils/pupils-table/pupils-table.component")
);
const AddPupilEntry = lazy(() =>
  import("./routes/pupils/add-pupil/add-pupil-entry.component")
);
const EditPupilEntry = lazy(() =>
  import("./routes/pupils/edit-pupil-entry/edit-pupil-entry.component")
);
const BlockBookingsTable = lazy(() =>
  import(
    "./routes/block-bookings/block-bookings-table/block-bookings-table.component"
  )
);
const AddBlockBookingEntry = lazy(() =>
  import(
    "./routes/block-bookings/add-block-booking/add-block-booking-entry.component"
  )
);
const EditBlockBookingEntry = lazy(() =>
  import(
    "./routes/block-bookings/edit-block-booking/edit-block-booking-entry.component"
  )
);
const ProgressTable = lazy(() =>
  import("./routes/pupil-progress/progress-table/progress-table.component")
);
const AddPupilProgress = lazy(() =>
  import(
    "./routes/pupil-progress/add-pupil-progress/add-pupil-progress.component"
  )
);
const EditPupilProgress = lazy(() =>
  import(
    "./routes/pupil-progress/edit-pupil-progress/edit-pupil-progress.component"
  )
);
const DeleteEntry = lazy(() =>
  import("./routes/delete-entry/delete-entry.component")
);

const Refunds = lazy(() => import("./routes/refunds/refunds.component"));
const PrivacyPolicy = lazy(() =>
  import("./routes/privacy-policy/privacy-policy.component")
);
const CookiePolicy = lazy(() =>
  import("./routes/cookie-policy/cookie-policy.component")
);
const Credits = lazy(() => import("./routes/credits/credits.component"));
const Terms = lazy(() => import("./routes/terms/terms.component"));

const App = () => {
  useCheckUserSession();
  useSubscriptionExpiredCheck();
  const currentUser = useSelector(selectCurrentUser);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Revolutionise Your Driving School Business with Our App: Manage
            Lessons, Income, and Progress Reports Effortlessly in the UK!
          </title>
          <meta
            name="description"
            content="Looking for a comprehensive and easy-to-use tool to manage your driving instructor business? Look no further than ADI Manager! Our app is the perfect solution for UK driving instructors who need to keep track of their lesson schedules, pupil information, and financials. With ADI Manager, you can quickly and easily add lessons to your diary, track pupil progress in key subjects, and manage your income and expenses with ease. Plus, our app is available on web and mobile, so you can access it from any device. Don't let the day-to-day tasks of running your business slow you down, streamline your operations with ADI Manager today!"
          />

          <meta
            name="keywords"
            content="Driving instructor diary management app UK, Lesson planning and scheduling app for driving instructors, Pupil progress tracking app for driving instructors, Income and expenditure management app for UK driving instructors, All-in-one app for UK driving instructors, Driving instructor software for lesson planning and management, Mobile app for managing driving instructor business, Efficient driving instructor management tool, Driving instructor productivity app for UK-based instructors, Time-saving app for managing driving instructor business in the UK"
          />
        </Helmet>
        <GlobalStyle />
        <Toolbar />
        <CookieBanner />
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
                {/* <Route
                  path="sign-up"
                  element={
                    !currentUser ? (
                      <SignUp />
                    ) : (
                      <Navigate replace to="/my-account" />
                    )
                  }
                /> */}

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
                <Route
                  path="lessons"
                  element={currentUser && <LessonsTable />}
                />
                <Route
                  path="add-lesson-entry"
                  element={currentUser && <AddLessonEntry />}
                />
                <Route
                  path="edit-lesson-entry"
                  element={currentUser && <EditLessonEntry />}
                />
                <Route path="money" element={currentUser && <MoneyOptions />} />
                <Route path="income" element={currentUser && <IncomeTable />} />
                <Route
                  path="add-income-entry"
                  element={currentUser && <AddIncomeEntry />}
                />
                <Route
                  path="edit-income-entry"
                  element={currentUser && <EditIncomeEntry />}
                />
                <Route
                  path="expenses"
                  element={currentUser && <ExpensesTable />}
                />
                <Route
                  path="add-expenses-entry"
                  element={currentUser && <AddExpensesEntry />}
                />
                <Route
                  path="edit-expense-entry"
                  element={currentUser && <EditExpenseEntry />}
                />
                <Route
                  path="total-expenses-week"
                  element={currentUser && <TotalExpensesWeekTable />}
                />
                <Route
                  path="add-total-expenses-week-entry"
                  element={currentUser && <AddTotalExpensesWeekEntry />}
                />
                <Route
                  path="edit-total-expenses-week-entry"
                  element={currentUser && <EditTotalExpensesWeekEntry />}
                />
                <Route
                  path="total-expenses-month"
                  element={currentUser && <TotalExpensesMonthTable />}
                />
                <Route
                  path="add-total-expenses-month-entry"
                  element={currentUser && <AddTotalExpensesMonthEntry />}
                />
                <Route
                  path="edit-total-expenses-month-entry"
                  element={currentUser && <EditTotalExpensesMonthEntry />}
                />
                <Route
                  path="total-expenses-year"
                  element={currentUser && <TotalExpensesYearTable />}
                />
                <Route
                  path="add-total-expenses-year-entry"
                  element={currentUser && <AddTotalExpensesYearEntry />}
                />
                <Route
                  path="edit-total-expenses-year-entry"
                  element={currentUser && <EditTotalExpensesYearEntry />}
                />
                <Route
                  path="pupil-options"
                  element={currentUser && <PupilOptions />}
                />
                <Route path="pupils" element={currentUser && <PupilsTable />} />
                <Route
                  path="add-pupil-entry"
                  element={currentUser && <AddPupilEntry />}
                />
                <Route
                  path="edit-pupil-entry"
                  element={currentUser && <EditPupilEntry />}
                />
                <Route
                  path="block-bookings"
                  element={currentUser && <BlockBookingsTable />}
                />
                <Route
                  path="add-block-booking-entry"
                  element={currentUser && <AddBlockBookingEntry />}
                />
                <Route
                  path="edit-block-booking-entry"
                  element={currentUser && <EditBlockBookingEntry />}
                />
                <Route
                  path="pupil-progress"
                  element={currentUser && <ProgressTable />}
                />
                <Route
                  path="add-pupil-progress"
                  element={currentUser && <AddPupilProgress />}
                />
                <Route
                  path="edit-pupil-progress"
                  element={currentUser && <EditPupilProgress />}
                />
                <Route
                  path="delete-entry"
                  element={currentUser && <DeleteEntry />}
                />
                <Route path="refunds" element={<Refunds />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="cookie-policy" element={<CookiePolicy />} />
                <Route path="credits" element={<Credits />} />
                <Route path="terms" element={<Terms />} />
              </Route>
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
        <ScrollUpButton />
        <ScrollToTopAuto />
      </HelmetProvider>
    </>
  );
};

export default App;
