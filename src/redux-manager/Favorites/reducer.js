import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  FETCH_MOVIE,
  SAVE_LIST,
} from "../constants";

const initialValues = {
  movies: [],
  favoriteMovies: [],
  title: []
};

const favoriteReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case FETCH_MOVIE:
      return state;
    case ADD_MOVIE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case DELETE_MOVIE:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie, index) => index != action.payload
        ),
      };
    case SAVE_LIST:
      return { ...state, title: [...state.title, action.payload] };
    default:
      return state;
  }
};

export default favoriteReducer;
