import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";
import Logo from "../../images/logo.png"

function Register() {
   return (
        <section className="register">
         <div className="register__container">
            <Link to="/"><img className="register__logo" src={Logo}></img></Link>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form">
               <label className="register__label">Имя</label>
               <input className="register__input" type="text"></input>

               <label className="register__label">E-mail</label>
               <input className="register__input" type="email"></input>

               <label className="register__label">Пароль</label>
               <input className="register__input" type="password"></input>
               <p className="register__error display-none">Что-то пошло не так...</p>

               <button className="register__button">Зарегистрироваться</button>
            </form>
            <p className="register__text">Уже зарегистрированы?
               <Link to="/signin" className="register__link">Войти</Link>
            </p>
         </div>
        </section>  
    );
}

export default Register;