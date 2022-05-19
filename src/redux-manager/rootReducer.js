import { combineReducers } from "redux";
import favoriteReducer from "./Favorites/reducer";

const rootReducer = combineReducers({ favoriteReducer });

export default rootReducer;