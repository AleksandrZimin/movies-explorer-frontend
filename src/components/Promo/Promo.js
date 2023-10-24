import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";
import NavTab from "../NavTab/NavTab";

function Promo() {
   return (
        <div className="promo">
          <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
          {/* <div className="promo__buttons">
            <button className="promo__button">О проекте</button>
            <button className="promo__button">Технологии</button>
            <button className="promo__button">Студент</button>
          </div> */}
          <NavTab />
        </div>
    );
}

export default Promo;