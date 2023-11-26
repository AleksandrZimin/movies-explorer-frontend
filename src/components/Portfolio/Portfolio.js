import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__name">Портфолио</h2>
      <div className="portfolio__links">
        <a
          className="portfolio__link"
          href="https://aleksandrzimin.github.io/how-to-learn/"
          target="_blank"
        >
          Статичный сайт
        </a>
        <a
          className="portfolio__link"
          href="https://aleksandrzimin.github.io/russian-travel/"
          target="_blank"
        >
          Адаптивный сайт
        </a>
        <a
          className="portfolio__link"
          href="https://zimin.nomoredomainsrocks.ru/"
          target="_blank"
        >
          Одностраничное приложение
        </a>
      </div>
    </div>
  );
}

export default Portfolio;

