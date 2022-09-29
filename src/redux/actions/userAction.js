import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGIN_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants.js";
import axios from "axios";

import API_URL from "../../helpers/ApiUrl.js";

const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const data = await axios.post(
      `${API_URL}/auth/signin`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("TR", data);
    localStorage.setItem("token", data.data.token);
    localStorage.setItem(
      "user",
      JSON.stringify({
        _id: data.data.user._id,
        firstName: data.data.user.firstName,
        lastName: data.data.user.lastName,
        email: data.data.user.email,
        isAdmin: data.data.user.isAdmin,
      })
    );
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

const signUp = (firstName, lastName, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const data = await axios.post(
      `${API_URL}/auth/signup`,
      { firstName, lastName, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("TR", data);
    localStorage.setItem("token", data.data.token);
    localStorage.setItem(
      "user",
      JSON.stringify({
        _id: data.data.user._id,
        firstName: data.data.user.firstName,
        lastName: data.data.user.lastName,
        email: data.data.user.email,
        isAdmin: data.data.user.isAdmin,
      })
    );
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

const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
  }
};

const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

const getUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const data = await axios.get(`${API_URL}/api/user/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("TR", data);
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log("FA", error);
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export { signIn, signUp, logout, clearErrors, getUser };
