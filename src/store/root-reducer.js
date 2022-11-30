import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { customerReducer } from "./customer/customer.reducer";
import { errorReducer } from "./error/error.reducer";
import { loaderReducer } from "./loader/loader.reducer";
import { tableReducer } from "./table/table.reducer";
import entryReducer from "./entry/entry.reducer";
import { diaryReducer } from "./diary/diary.reducer";
import { lessonReducer } from "./lesson/lesson.reducer";
import { incomeReducer } from "./income/income.reducer";
import { expensesReducer } from "./expenses/expenses.reducer";
import { totalExpensesWeekReducer } from "./total-expenses-week/total-expenses-week.reducer";
import { totalExpensesMonthReducer } from "./total-expenses-month/total-expenses-month.reducer";
import { totalExpensesYearReducer } from "./total-expenses-year/total-expenses-year.reducer";
import { pupilsReducer } from "./pupils/pupils.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  error: errorReducer,
  loader: loaderReducer,
  table: tableReducer,
  entry: entryReducer,
  diary: diaryReducer,
  lesson: lessonReducer,
  income: incomeReducer,
  expenses: expensesReducer,
  totalExpensesWeek: totalExpensesWeekReducer,
  totalExpensesMonth: totalExpensesMonthReducer,
  totalExpensesYear: totalExpensesYearReducer,
  pupils: pupilsReducer,
});
