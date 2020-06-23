import { all, call, put, takeLatest } from "redux-saga/effects";
import { SIGN_IN, signInSuccess } from "./actions";
import api from "./services";

function* signIn(action) {
  try {
    const { user } = action;
    const request = yield call(
      api.user.signIn,
      "/api/auth/signin",
      user
    );

    console.log(request)
    yield put(signInSuccess(request.data))
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield all([takeLatest(SIGN_IN, signIn)]);
}
