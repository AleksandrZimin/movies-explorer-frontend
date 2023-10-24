import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

function Portfolio() {
   return (
        <div className="portfolio">
          <h2 className="portfolio__name">Портфолио</h2>
          <p className="portfolio__link">Статичный сайт</p>
          <p className="portfolio__link">Адаптивный сайт</p>
          <p className="portfolio__link">Одностраничное приложение</p>
        </div>
    );
}

export default Portfolio;