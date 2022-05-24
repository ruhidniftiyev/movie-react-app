import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  FETCH_MOVIE,
  SAVE_LIST,
  REQUEST_MOVIES,
} from "../constants";

const initialValues = {
  movies: [],
  favoriteMovies: [],
  title: [],
  id: "",
};

const favoriteReducer = (state = initialValues, action) => {
  const elementIsExists = state.favoriteMovies.some(
    (movie) => movie.imdbID === action.payload?.imdbID
  );
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case FETCH_MOVIE:
      return state;
    case ADD_MOVIE:
      if (elementIsExists) return state;
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
    case REQUEST_MOVIES:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

export default favoriteReducer;
