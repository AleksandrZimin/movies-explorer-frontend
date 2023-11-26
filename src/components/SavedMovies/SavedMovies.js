import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies({ userMovies, setUserMovies }) {
  const [result, setResult] = useState(userMovies);
  const [message, setMessage] = useState("");
  const [params, setParams] = useState({})

  useEffect(() => {
    if(!params.name) {
      return setResult(userMovies)
    }
    const filteredMovies = userMovies.filter((film) => {
      console.log(film.nameRU)
      if (params.check) {
        return (
          film.nameRU.toLowerCase().includes(params.name.toLowerCase()) &&
          film.duration <= 40
        );
      }
      return film.nameRU.toLowerCase().includes(params.name.toLowerCase());
    });
    setResult(filteredMovies);

  }, [userMovies])

  const submitHandler = (name, check) => {
    setMessage("");
    if (!name) {
      setMessage("Нужно ввести ключевое слово");
      return;
    }
    setParams({name, check})
    const filteredMovies = userMovies.filter((film) => {
      if (check) {
        return (
          film.nameRU.toLowerCase().includes(name.toLowerCase()) &&
          film.duration <= 40
        );
      }
      return film.nameRU.toLowerCase().includes(name.toLowerCase());
    });
    setResult(filteredMovies);
    if (!filteredMovies.length) {
      setMessage("Ничего не найдено");
    }
  };

  return (
    <main className="SavedMovies">
      <SearchForm submitHandler={submitHandler} />
      {message ? (
        <span>{message}</span>
      ) : (
        <MoviesCardList
          films={result}
          setSavedMovies={setUserMovies}
          savedMovies={userMovies}
        />
      )}
    </main>
  );
}

export default SavedMovies;

