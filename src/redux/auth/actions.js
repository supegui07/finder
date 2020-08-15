export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signInSuccess = (profile) => ({
  type: SIGN_IN_SUCCESS,
  profile
})
