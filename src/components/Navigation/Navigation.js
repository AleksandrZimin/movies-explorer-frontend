import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ isMenuVisible, setIsMenuVisible }) {
  return (
    <section
      className={`navigation ${isMenuVisible ? "navigation--visible" : ""}`}
    >
      <nav className="navigation__menu">
        <ul className="navigation__items">
          <li className="navigation__item">
            <NavLink
              to="/"
              className="navigation__link"
              onClick={() => setIsMenuVisible(false)}
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/movies"
              className="navigation__link"
              onClick={() => setIsMenuVisible(false)}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/saved-movies"
              className="navigation__link"
              onClick={() => setIsMenuVisible(false)}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink
        to="/profile"
        className="navigation__button"
        onClick={() => setIsMenuVisible(false)}
      >
        Аккаунт
      </NavLink>
    </section>
  );
}

export default Navigation;

