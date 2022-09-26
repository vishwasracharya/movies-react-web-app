import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { movieReducer, movieDetailsReducer } from "./reducers/movieReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  movies: movieReducer,
  movieDetails: movieDetailsReducer,
  user: userReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
