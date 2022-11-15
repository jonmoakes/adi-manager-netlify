import { useDispatch } from "react-redux";
import { clearErrorMessage } from "../../store/error/error.action";
import { signOutStart } from "../../store/user/user.action";
import { clearSubscriptionData } from "../../store/customer/customer.action";

const useLogoutAndClearRedux = () => {
  const dispatch = useDispatch();

  async function logoutAndClearRedux() {
    return [
      dispatch(clearSubscriptionData()),
      // await dispatch({
      //   type: "CLEAR_BLOCK_BOOKING_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_DIARY_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_ENTRY",
      // }),
      // await dispatch({
      //   type: "CLEAR_UPDATED_ENTRY",
      // }),
      dispatch(clearErrorMessage()),
      // await dispatch({
      //   type: "CLEAR_EXPENSES_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_INCOME_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_LESSON_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_PUPIL_PROGRESS_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_PUPILS_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_TOTAL_EXPENSES_MONTH_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_TOTAL_EXPENSES_WEEK_ENTRIES",
      // }),
      // await dispatch({
      //   type: "CLEAR_TOTAL_EXPENSES_YEAR_ENTRIES",
      // }),
      dispatch(signOutStart()),
    ];
  }

  return { logoutAndClearRedux };
};

export default useLogoutAndClearRedux;
