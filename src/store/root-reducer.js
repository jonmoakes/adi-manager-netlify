import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { customerReducer } from "./customer/customer.reducer";
import { errorReducer } from "./error/error.reducer";
import { loaderReducer } from "./loader/loader.reducer";
import { tableReducer } from "./table/table.reducer";
import { diaryReducer } from "./diary/diary.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  error: errorReducer,
  loader: loaderReducer,
  table: tableReducer,
  diary: diaryReducer,
});
