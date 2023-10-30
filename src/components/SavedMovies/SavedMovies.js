import React from 'react';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';

import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';


function SavedMovies() {
  return (
    <main className="SavedMovies">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList />
    </main>
  );
}

export default SavedMovies;