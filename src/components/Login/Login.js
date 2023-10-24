import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";
import Logo from "../../images/logo.png"

function Login() {
   return (
        <section className="login">
         <div className="login__container">
            <Link to="/"><img className="login__logo" src={Logo}></img></Link>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form">
               <label className="login__label">E-mail</label>
               <input className="login__input" type="email"></input>

               <label className="login__label">Пароль</label>
               <input className="login__input" type="password"></input>

               <button className="login__button">Войти</button>
            </form>
            <p className="login__text">Ещё не зарегистрированы?
               <Link to="/signup" className="login__link">Регистрация</Link>
            </p>
         </div>
        </section>  
    );
}

export default Login;