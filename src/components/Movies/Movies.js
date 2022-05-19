import React, { useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";
import { useSelector } from "react-redux";
import { getSearchedMoviesSelector } from "../../redux-manager/Favorites/selectors";

const Movies = () => {
  const searchedMovies = useSelector(getSearchedMoviesSelector);
  const searchedMoviesArray = searchedMovies[searchedMovies.length - 1];
  const filtredSearchArray = searchedMoviesArray?.filter(movie => movie.Poster != 'N/A')
  const [movies, setMovies] = useState(filtredSearchArray);

  return (
    <ul className="movies">
      {filtredSearchArray?.map((movie, index) =>
        (
          <li className="movies__item" key={index}>
            <MovieItem {...movie} />
          </li>
        )
      )}
    </ul>
  );
};

export default Movies;
