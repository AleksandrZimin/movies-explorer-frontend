import React from "react";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__left">
          <h3 className="aboutme__name">Виталий</h3>
          <p className="aboutme__job">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="aboutme__link"
            href="https://github.com/AleksandrZimin"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Фотография" className="aboutme__image"></img>
      </div>
    </section>
  );
}

export default AboutMe;

