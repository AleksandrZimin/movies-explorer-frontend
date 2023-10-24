import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

function Navigation() {
   return (
    <section className="navigation">
      <nav className="navigation__menu">
         <ul className="navigation__items">
            <li className="navigation__item">
               <a className="navigation__link">Главная</a>
            </li>
            <li className="navigation__item">
               <a className="navigation__link">Фильмы</a>
            </li>
            <li className="navigation__item">
               <a className="navigation__link">Сохранённые фильмы</a>
            </li>
         </ul>
         
      </nav>   
         <button className="navigation__button">Аккаунт</button>
         <div className="navigation__close"></div>
    </section>
    );
}

export default Navigation;