import React from "react";
import "./Favorites.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMoviesSelector } from "../../redux-manager/Favorites/selectors";
import {
  deleteMovieAction,
  postListAction,
  saveListAction,
} from "../../redux-manager/Favorites/actions";
import { Link } from "react-router-dom";
import { getIdSelector } from "../../redux-manager/Favorites/selectors";

const Favorites = () => {
  let favoriteList = useSelector(getFavoriteMoviesSelector);
  let linkId = useSelector(getIdSelector);

  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState(favoriteList);
  const [checked, setChecked] = useState(false);
  const [blocker, setBlocker] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const deleteMovieFromFavorites = (e) => {
    dispatch(deleteMovieAction(e.target.id));
  };

  const saveAndPostFavoritesMovie = (e) => {
    dispatch(saveListAction(title));
    dispatch(postListAction({title, favoriteList}))
    setChecked(true)
    setBlocker(true)
  };

  return (
    <div className="favorites">
      <input
        value={title}
        className="favorites__name"
        onChange={handleChange}
        placeholder="Введите название списка"
        disabled={blocker}
      />
      <ul className="favorites__list">
        {favoriteList?.map((item, index) =>
          (
            <div className="list-item" key={index}>
              <li key={index}>
                {item.Title} ({item.Year})
              </li>
              <button 
              disabled={blocker}
              onClick={deleteMovieFromFavorites}
              id={index}
              className='favorites__delete-btn'
              >X</button>
            </div>
        ))}
      </ul>
      {checked ? (
        <Link to={`/list/${linkId}`}>Перейти к списку</Link>
      ) : (
        <button
          type="button"
          className="favorites__save"
          disabled={title && favoriteList?.length !== 0 ? false : true}
          onClick={saveAndPostFavoritesMovie}
        >
          Сохранить список
        </button>
      )}
    </div>
  );
};

export default Favorites;
