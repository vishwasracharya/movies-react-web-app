import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants.js";

let initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, isAuthenticated: false };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        message: action.payload.message,
        token: action.payload.token,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    // case LOGOUT_SUCCESS:
    //   return { ...state, loading: false, isAuthenticated: false, user: null };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export { userReducer };
