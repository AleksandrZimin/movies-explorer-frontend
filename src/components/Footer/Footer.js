import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  const isSavePage = pathname === "/saved-movies";
  const isHomePage = pathname === "/";
  const isMoviesPage = pathname === "/movies";
  const isFooterVisible = isHomePage || isSavePage || isMoviesPage;

  return (
    <>
      {isFooterVisible && (
        <footer className="footer">
          <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__container">
            <p className="footer__date">&copy; 2020</p>
            <div className="footer__links">
              <a
                className="footer__link"
                href="https://practicum.yandex.ru/"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
              <a
                className="footer__link"
                href="https://github.com/AleksandrZimin"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;

