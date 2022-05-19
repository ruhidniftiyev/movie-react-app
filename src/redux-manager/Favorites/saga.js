import {
  takeEvery,
  put,
  call,
  select,
  all,
  takeLatest,
} from "redux-saga/effects";
import { ADD_MOVIE, DELETE_MOVIE, SEARCH_MOVIE, FETCH_MOVIE, REQUEST_MOVIES } from "../constants";
import { addMovieAction, searchMovieAction, fetchMovieAction, saveListAction } from "../Favorites/actions";
import { fetchMovies, requestFavoritesList } from "../REST.js";
import { getFavoriteMoviesSelector } from "./selectors";

function* workerFavorites(action) {
  try {
    const data = yield call(fetchMovies, action.payload);
    const ac = data.Search
    yield put(searchMovieAction(ac));
  } catch (err) {
    console.error("ERROR", err);
  }
}

export default function* watcherList() {
  yield takeEvery(FETCH_MOVIE, workerFavorites);
}