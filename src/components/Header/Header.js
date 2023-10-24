import React, { useState } from "react";
import { Routes, Link, Route, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

function Header({ email, handleLogout }) {
   return (
        <header className="header">
          <Link to="/"><img src={logo} alt="Логотип" className="header__logo" /></Link>
          <div className="header__menu">
            <NavLink to="/movies" className="header__link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__link">Cохраненные фильмы</NavLink>
          </div>
          <div className="header__auth">
          <NavLink to="/signup" className="header__signup">Регистрация</NavLink>
          <NavLink to="/signin" className="header__signin">Войти</NavLink>  
          </div>
          <NavLink to="/profile" className="header__button">Аккаунт</NavLink>
          <svg className="header__burger" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36 14L8 14V11L36 11V14Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36 24L8 24V21L36 21V24Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36 34L8 34V31L36 31V34Z" fill="white"/>
          </svg>
        </header>
    );
}

export default Header;