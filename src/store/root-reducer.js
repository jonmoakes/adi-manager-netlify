import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { tableReducer } from "./table/table.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  table: tableReducer,
});
