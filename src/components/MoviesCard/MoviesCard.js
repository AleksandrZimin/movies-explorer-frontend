import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ isSaved, film, addMovie, deleteMovie }) {
  const { pathname } = useLocation();
  const isSavePage = pathname === "/saved-movies";

  const handleClick = () => {
    if (isSaved) {
      deleteMovie(film);
    } else {
      addMovie(film);
    }
  };

  const formatTime = () => {
    // Math.trunc(film.duration)
    const hours = Math.trunc(film.duration / 60);
    const minuts = film.duration % 60;

    return hours ? hours + " ч " + minuts + " м" : minuts + " м";
  };

  return (
    <div className="moviescard">
      <div className="moviescard__img-Wrapper">
        <a className="moviescard__link" href={film.trailerLink} target="_blank">
          <img
            className="moviescard__photo"
            src={film.image}
            alt="Обложка фильма"
          />
        </a>
        <button
          onClick={handleClick}
          className={`moviescard__button ${
            isSaved && !isSavePage ? "moviescard__button_state_save" : ""
          } ${isSavePage ? "moviescard__button_state_delete" : ""}`}
        >
          {!isSaved && !isSavePage && "Сохранить"}
        </button>
      </div>
      <div className="moviescard__info">
        <p className="moviescard__name">{film.nameRU}</p>
        <p className="moviescard__time">{formatTime()}</p>
      </div>
    </div>
  );
}

export default MoviesCard;

