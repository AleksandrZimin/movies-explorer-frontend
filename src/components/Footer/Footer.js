import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

function Footer() {
   return (
        <footer className="footer">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__container">
            <p className="footer__date">&copy; 2020</p>
            <div className="footer__links">
               <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
               <a className="footer__link" href="https://github.com/AleksandrZimin" target="_blank">Github</a>
            </div>
          </div>
        </footer>
    );
}

export default Footer;