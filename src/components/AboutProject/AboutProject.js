import React from "react";

function AboutProject() {
  return (
    <div className="about" id="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__texts">
        <div className="about__left-text">
          <p className="about__main-text">Дипломный проект включал 5 этапов</p>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__right-text">
          <p className="about__main-text">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__progress">
        <div className="about__progress-left">1 неделя</div>
        <div className="about__progress-right">4 недели</div>
      </div>
    </div>
  );
}

export default AboutProject;

