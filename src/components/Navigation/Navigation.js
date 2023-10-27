import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
   return (
    <section className="navigation">
      <nav className="navigation__menu">
         <ul className="navigation__items">
            <li className="navigation__item">
               <NavLink to="/" className="navigation__link">Главная</NavLink>
            </li>
            <li className="navigation__item">
               <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
            </li>
            <li className="navigation__item">
               <NavLink to="/saved-movies" className="navigation__link">Сохранённые фильмы</NavLink>
            </li>
         </ul>
         
      </nav>   
         <NavLink to="/profile" className="navigation__button">Аккаунт</NavLink>
         <button className="navigation__close"></button>
    </section>
    );
}

export default Navigation;