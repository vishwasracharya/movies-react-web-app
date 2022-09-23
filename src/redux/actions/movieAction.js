import axios from "axios";
import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/movieConstants.js";

// Get all movies
export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });

    const { data } = await axios.get(`/api/all-movies`);
    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get movie details
export const getMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/movie/${id}`);
    dispatch({
      type: MOVIE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
