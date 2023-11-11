import React from "react";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import MoviesApi from "../../utils/MoviesApi.js";
import FilmDTO from "../../utils/FilmDTO.js";

function Movies({ userMovies, setUserMovies }) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("result"));
    if (data) {
      setResult(data);
    }
  }, []);

  const submitForm = (name, check) => {
    setMessage("");
    if (!name) {
      setMessage("Нужно ввести ключевое слово");
      return;
    }
    const moviesList = JSON.parse(sessionStorage.getItem("films")) ?? []

    if (moviesList.length) {
      const filteredMovies = moviesList.filter((film) => {
        if (check) {
          return (
            film.nameRU.toLowerCase().includes(name.toLowerCase()) &&
            film.duration <= 40
          );
        }
        return film.nameRU.toLowerCase().includes(name.toLowerCase());
      });
      localStorage.setItem("result", JSON.stringify(filteredMovies));
      localStorage.setItem("name", name);
      localStorage.setItem("check", check);
      setResult(filteredMovies);
      if (!filteredMovies.length) {
        setMessage("Ничего не найдено");
      }
    } else {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((res) => {
          const movies = res.map((film) => new FilmDTO(film));
          // setMoviesList(movies);
          sessionStorage.setItem("films", JSON.stringify(movies))
          const filteredMovies = movies.filter((film) => {
            if (check) {
              return (
                film.nameRU.toLowerCase().includes(name.toLowerCase()) &&
                film.duration <= 40
              );
            }
            return film.nameRU.toLowerCase().includes(name.toLowerCase());
          });
          localStorage.setItem("result", JSON.stringify(filteredMovies));
          localStorage.setItem("name", name);
          localStorage.setItem("check", check);
          setResult(filteredMovies);
          if (!filteredMovies.length) {
            setMessage("Ничего не найдено");
          }
        })
        .catch(() => {
          setMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <main className="Movies">
      <SearchForm submitHandler={submitForm} />
      {message ? (
        <span>{message}</span>
      ) : (
        <MoviesCardList
          films={result}
          isLoading={isLoading}
          savedMovies={userMovies}
          setSavedMovies={setUserMovies}
        />
      )}
    </main>
  );
}

export default Movies;

