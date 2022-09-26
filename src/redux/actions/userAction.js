import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants.js";
import axios from "axios";

const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const data = await axios.post(
      "/auth/signin",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("TR", data);
    localStorage.setItem("token", data.data.token);
    document.cookie = `token=${data.data.token}`;
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log("FA", error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};

const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

export { signIn, clearErrors };
