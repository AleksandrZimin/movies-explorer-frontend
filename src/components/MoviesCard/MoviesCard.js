import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({isSaved}) {

   const {pathname} = useLocation();
   const isSavePage = pathname === "/saved-movies";

   return (

         <div className="moviescard">
            <div className="moviescard__photo">
               <button className={`moviescard__button ${
                  isSaved && !isSavePage 
                  ? 'moviescard__button_state_save' 
                  : ''
               } ${isSavePage 
                  ? 'moviescard__button_state_delete' 
                  : ''}`}> 
               {(!isSaved && !isSavePage) && 'Сохранить'}</button>

            </div>
            <div className="moviescard__info">
               <p className="moviescard__name">В погоне за Бенкси</p>
               <p className="moviescard__time">1h 17m</p>
            </div>
         </div> 

    );
}

export default MoviesCard;