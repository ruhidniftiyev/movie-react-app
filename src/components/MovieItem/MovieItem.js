import React from "react";
import "./MovieItem.css";
import { useDispatch } from "react-redux";
import { addMovieAction, deleteMovieAction } from "../../redux-manager/Favorites/actions";

const MovieItem = (props) => {
  const { Title, Year, Poster, imdbID } = props;

  const dispatch = useDispatch();

  const addMovieToFavorites = () => {
    dispatch(addMovieAction({Title, Year, imdbID}))
  }

  return (
    <article className="movie-item">
      <img className="movie-item__poster" src={Poster} alt={Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {Title}&nbsp;({Year})
        </h3>
        <button type="button" className="movie-item__add-button" onClick={addMovieToFavorites}>
          Добавить в список
        </button>
      </div>
    </article>
  );
};

export default MovieItem;