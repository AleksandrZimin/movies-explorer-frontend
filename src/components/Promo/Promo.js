import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";
import NavTab from "../NavTab/NavTab";

function Promo() {
   return (
        <div className="promo">
          <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
          <NavTab />
        </div>
    );
}

export default Promo;