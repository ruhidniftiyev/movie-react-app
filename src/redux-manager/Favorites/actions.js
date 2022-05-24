import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  FETCH_MOVIE,
  SAVE_LIST,
  REQUEST_MOVIES,
} from "../constants";

export const addMovieAction = (movie) => ({ type: ADD_MOVIE, payload: movie });
export const deleteMovieAction = (id) => ({ type: DELETE_MOVIE, payload: id });
export const searchMovieAction = (value) => ({
  type: SEARCH_MOVIE,
  payload: value,
});
export const fetchMovieAction = (item) => ({
  type: FETCH_MOVIE,
  payload: item,
});
export const saveListAction = (list) => ({ type: SAVE_LIST, payload: list });
export const postListAction = (list) => ({
  type: REQUEST_MOVIES,
  payload: list,
});