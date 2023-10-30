import React from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({films}) {

    const {pathname} = useLocation();
    const isSavePage = pathname === "/saved-movies";

   return (
        <div className="moviescardlist">
            <div className="moviescardlist__items">
               <MoviesCard isSaved/>
               <MoviesCard isSaved/>
               <MoviesCard isSaved/>
               <MoviesCard />
               <MoviesCard />
            </div>
            {!isSavePage && <button className="moviescardlist__button">Ещё</button>}
        </div>
    );
}

export default MoviesCardList;