import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from "../Preloader/Preloader.js";
import MainApi from "../../utils/MainApi.js";

function MoviesCardList({ films, isLoading, savedMovies, setSavedMovies }) {
  const [cardLength, setCardLength] = useState(0);
  const { pathname } = useLocation();
  const isSavePage = pathname === "/saved-movies";

  useEffect(() => {
    changeLength();
    window.addEventListener("resize", changeLength);
    return () => {
      window.removeEventListener("resize", changeLength);
    };
  }, []);

  useEffect(() => {
    changeLength()

  }, [films])

  const changeLength = () => {
    if (window.innerWidth > 1180) {
      setCardLength(12);
    } else if (window.innerWidth > 750) {
      setCardLength(8);
    } else {
      setCardLength(5);
    }
  };

  const addMoreCard = () => {
    if (window.innerWidth > 1180) {
      setCardLength(cardLength + 3);
    } else {
      setCardLength(cardLength + 2);
    }
  };

  const addMovie = (movie) => {
    MainApi.addFilm(movie)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteMovie = (movie) => {
    const { _id } = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.movieId
    );
    MainApi.removeFilm(_id)
      .then((movie) => {
        setSavedMovies(
          savedMovies.filter(
            (savedMovie) => savedMovie.movieId !== movie.movieId
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isMovieSaved = (movie) => {
    if (isSavePage) {
      return true;
    }
    return savedMovies.find(
      (savedMovie) => savedMovie.movieId === movie.movieId
    );
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="moviescardlist">
          <div className="moviescardlist__items">
            {(isSavePage ? films : films.slice(0, cardLength)).map((film) => (
              <MoviesCard
                film={film}
                key={film.movieId}
                addMovie={addMovie}
                isSaved={isMovieSaved(film)}
                deleteMovie={deleteMovie}
              />
            ))}
          </div>
          {!isSavePage && cardLength < films.length && (
            <button className="moviescardlist__button" onClick={addMoreCard}>
              Ещё
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default MoviesCardList;

