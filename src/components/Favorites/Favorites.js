import React from "react";
import "./Favorites.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMoviesSelector } from "../../redux-manager/Favorites/selectors";
import { deleteMovieAction, saveListAction } from "../../redux-manager/Favorites/actions";
import { Link } from "react-router-dom";

const Favorites = () => {
  let favoriteList = useSelector(getFavoriteMoviesSelector);

  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState(favoriteList);
  const [className, setClassName] = useState("favorites__save")
  const [linkClassName, setLinkClassName] = useState('blocked')

  let disabled = favoriteList.length > 0 ? false : true;

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const deleteMovieFromFavorites = (e) => {
    dispatch(deleteMovieAction(e.target.id))
  }

  const saveFavoritesMovie = (e) => {
    dispatch(saveListAction(title))
   setClassName("favorites__save blocked")
   setLinkClassName('linkIsView')
  }

  return (
    <div className="favorites">
      <input
        value={title}
        className="favorites__name"
        onChange={handleChange}
        placeholder="Введите название списка"
      />
      <ul className="favorites__list">
        {favoriteList?.map((item, index) => {
          return (
            <div className="list-item" key={index}>
              <li key={index}>
                {item.Title} ({item.Year})
              </li>
              <img
                onClick={deleteMovieFromFavorites}
                src="http://cdn.onlinewebfonts.com/svg/img_216917.png"
                className="favorites__delete-btn"
                id={index}
              />
            </div>
          );
        })}
      </ul>
      <button type="button" className={className} disabled={disabled} onClick={saveFavoritesMovie}>
        Сохранить список
      </button>
      <Link className={linkClassName} to="/list/89">
          {(title) ? title : 'Link'}
        </Link>
    </div>
  );
};

export default Favorites;
