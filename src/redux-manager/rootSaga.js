import { all, call } from "redux-saga/effects";
import MovieSaga from "./Favorites/saga";

function* rootSaga() {
  yield all([call(MovieSaga)]);
}

export default rootSaga;