import { all, call, put, takeLatest } from "redux-saga/effects";
import { SIGN_IN, signInSuccess } from "./actions";
import api from "./services";
// import { useLocalStorage } from "../../utils/use-local-store";
// import { enumTypesAuthLocalStorage } from "../../utils/constants";

function* signIn(action) {
  try {
    const { user } = action;
    const request = yield call(
      api.user.signIn,
      "/api/auth/signin",
      user
    );

    yield put(signInSuccess(request.data))

    // const { authStoredProp, profile } = enumTypesAuthLocalStorage;
    // useLocalStorage(request.data, authStoredProp, profile)
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield all([takeLatest(SIGN_IN, signIn)]);
}
