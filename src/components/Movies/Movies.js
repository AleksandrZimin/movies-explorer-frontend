import React from 'react';
import { useState, useEffect } from "react";
import { Routes, Route, redirect, useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function Movies() {
  return (
    <div className="Movies">
      <div className="page">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList />
      </div>
    </div>
  );
}

export default Movies;