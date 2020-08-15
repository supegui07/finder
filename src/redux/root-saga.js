import { all, fork } from "redux-saga/effects";
import auth from "./auth/saga-auth";

export default function* rootSaga() {
  yield all([fork(auth)]);
}
