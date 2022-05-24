import React, { useEffect, useState } from "react";
import "./ListPage.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFavoriteMoviesSelector } from "../../redux-manager/Favorites/selectors";
import { saveFavoritsMoviesSelector } from "../../redux-manager/Favorites/selectors";

const ListPage = (props) => {
  let favoriteList = useSelector(getFavoriteMoviesSelector);
  let listTitle = useSelector(saveFavoritsMoviesSelector);
  const lastElement = listTitle[listTitle.length - 1];
  
  const [movies, setMovies] = useState(favoriteList);
  const params = useParams()
  useEffect(() => {
    return () => {
      console.log(params.id);
    };
    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
  });

  return (
    <div className="list-page">
      <h1 className="list-page__title">{lastElement}</h1>
      <ul>
        {favoriteList?.map((item, index) => {
          return (
            <li key={index}>
              <a href={`https://www.imdb.com/title/${item.imdbID}/`}>
                {item.Title} ({item.Year})
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ListPage;
