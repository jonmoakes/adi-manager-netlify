import { useDispatch } from "react-redux";

import { clearSubscriptionData } from "../store/customer/customer.action";
import { clearBlockBookingEntries } from "../store/block-booking/block-booking.action";
import { clearDiaryEntries } from "../store/diary/diary.action";
import { clearEntry } from "../store/entry/entry.action";
import { clearErrorMessage } from "../store/error/error.action";
import { clearExpensesEntries } from "../store/expenses/expenses.action";
import { clearIncomeEntries } from "../store/income/income.action";
import { clearLessonEntries } from "../store/lesson/lesson.action";
import { stopLoader } from "../store/loader/loader.action";
import { clearPupilProgressEntries } from "../store/pupil-progress/pupil-progress.action";
import { clearPupilsEntries } from "../store/pupils/pupils.action";
import { clearTotalExpensesMonthEntries } from "../store/total-expenses-month/total-expenses-month.action";
import { clearTotalExpensesWeekEntries } from "../store/total-expenses-week/total-expenses-week.action";
import { clearTotalExpensesYearEntries } from "../store/total-expenses-year/total-expenses-year.action";
import { signOutStart } from "../store/user/user.action";

const useLogoutAndClearRedux = () => {
  const dispatch = useDispatch();

  const logoutAndClearRedux = () => {
    return [
      dispatch(signOutStart()),
      dispatch(clearSubscriptionData()),
      dispatch(clearBlockBookingEntries()),
      dispatch(clearDiaryEntries()),
      dispatch(clearEntry()),
      dispatch(clearErrorMessage()),
      dispatch(clearExpensesEntries()),
      dispatch(clearIncomeEntries()),
      dispatch(clearLessonEntries()),
      dispatch(stopLoader()),
      dispatch(clearPupilProgressEntries()),
      dispatch(clearPupilsEntries()),
      dispatch(clearTotalExpensesMonthEntries()),
      dispatch(clearTotalExpensesWeekEntries()),
      dispatch(clearTotalExpensesYearEntries()),
    ];
  };

  return { logoutAndClearRedux };
};

export default useLogoutAndClearRedux;
