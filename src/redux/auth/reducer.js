import { combineReducers } from "redux";
import { SIGN_IN_SUCCESS } from "./actions";

function profile(state = {}, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return action.profile;
  
    default:
      return state;
  }
}

export default combineReducers({
  profile,
});
