import { takeEvery, put, call } from "redux-saga/effects";
import { FETCH_MOVIE, GET_LIST, REQUEST_MOVIES } from "../constants";
import {
  searchMovieAction,
  postListAction,
} from "../Favorites/actions";
import { fetchMovies, requestMovies } from "../REST.js";

function* workerFavorites(action) {
  try {
    const data = yield call(fetchMovies, action.payload);
    const dataSearch = data.Search;
    yield put(searchMovieAction(dataSearch));
  } catch (err) {
    console.error("ERROR", err);
  }
}

function* workerSavedList(action) {
  try {
    const data = yield call(requestMovies, action.payload);
    yield put(postListAction(data));
  } catch (err) {
    console.log("ERROR", err);
  }
}

export default function* watcherList() {
  yield takeEvery(FETCH_MOVIE, workerFavorites);
  yield takeEvery(REQUEST_MOVIES, workerSavedList);
}
