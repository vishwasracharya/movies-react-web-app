import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_DETAILS_REQUEST,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/movieConstants.js";

let initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true, movies: [] };
    case MOVIE_LIST_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
        moviesCount: action.payload.length,
      };
    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

const movieDetailsReducer = (state = { movie: {} }, action) => {
  switch (action.type) {
    case MOVIE_DETAILS_REQUEST:
      return { loading: true, movie: {} };
    case MOVIE_DETAILS_SUCCESS:
      return {
        loading: false,
        movie: action.payload,
        movieCount: 1,
      };
    case MOVIE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

export { movieReducer, movieDetailsReducer };