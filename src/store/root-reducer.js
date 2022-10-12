import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { customerReducer } from "./customer/customer.reducer";
import { errorReducer } from "./error/error.reducer";
import { tableReducer } from "./table/table.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  customer: customerReducer,
  error: errorReducer,
  table: tableReducer,
});
