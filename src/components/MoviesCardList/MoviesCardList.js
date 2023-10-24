import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList() {
   return (
        <div className="moviescardlist">
            <div className="moviescardlist__items">
               <MoviesCard />
               <MoviesCard />
               <MoviesCard />
               <MoviesCard />
               <MoviesCard />
            </div>
            <button className="moviescardlist__button">Ещё</button>
        </div>
    );
}

export default MoviesCardList;