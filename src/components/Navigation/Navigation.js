import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../Header/Header";

function Navigation({ isMenuVisible, setIsMenuVisible }) {

   return ( 
    <section className={`navigation ${!isMenuVisible ? 'navigation--visible' : ''}`}>
      <nav className="navigation__menu">
         <ul className="navigation__items">
            <li className="navigation__item">
               <NavLink to="/" className="navigation__link" exact onClick={() => setIsMenuVisible(false)}>Главная</NavLink>
            </li>
            <li className="navigation__item">
               <NavLink to="/movies" className="navigation__link" onClick={() => setIsMenuVisible(false)}>Фильмы</NavLink>
            </li>
            <li className="navigation__item">
               <NavLink to="/saved-movies" className="navigation__link" onClick={() => setIsMenuVisible(false)}>Сохранённые фильмы</NavLink>
            </li>
         </ul>
         
      </nav>   
         <NavLink to="/profile" className="navigation__button">Аккаунт</NavLink>
    </section>
    );
}

export default Navigation;