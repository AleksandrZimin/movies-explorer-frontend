import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

function MoviesCard() {
   return (

         <div className="moviescard">
            <div className="moviescard__photo">
               <button className="moviescard__button">Сохранить</button>
               <icon className="moviescard__icon"></icon>
            </div>
            <div className="moviescard__info">
               <p className="moviescard__name">В погоне за Бенкси</p>
               <p className="moviescard__time">1h 17m</p>
            </div>
         </div> 

    );
}

export default MoviesCard;