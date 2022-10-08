import { all, call } from "redux-saga/effects";

import { userSaga } from "./user/user.saga";

// gets an array of invoked generator functions. Can Add multiple functions to the array
export default function* rootSaga() {
  yield all([call(userSaga)]);
}
