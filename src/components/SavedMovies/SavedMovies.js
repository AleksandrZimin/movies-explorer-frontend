import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";

function SavedMovies({ userMovies, setUserMovies }) {
  const [result, setResult] = useState(userMovies);
  const [message, setMessage] = useState("");

  const submitHandler = (name, check) => {
    setMessage("");
    if (!name) {
      setMessage("Нужно ввести ключевое слово");
      return;
    }
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

