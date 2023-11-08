import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import { useFormWithValidation } from "../../hooks/useForm";

function Login({ handleLogin, errorMessage }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(values.password, values.email);
  };

  return (
    <main className="login">
      <section className="login__container">
        <Link to="/">
          <img className="login__logo" alt="Логотип" src={Logo}></img>
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <label className="login__label">E-mail</label>
          <input
            className={`login__input ${
              errors.email ? "login__input_error" : ""
            }`}
            type="email"
            placeholder="Введите email"
            value={values.email}
            name="email"
            onChange={(event) => handleChange(event)}
            required
          ></input>
          <p className="login__error">{errors.email}</p>

          <label className="login__label">Пароль</label>
          <input
            className={`login__input ${
              errors.password ? "login__input_error" : ""
            }`}
            type="password"
            placeholder="Введите пароль"
            value={values.password}
            onChange={(event) => handleChange(event)}
            required
            name="password"
            minLength={6}
            maxLength={20}
          ></input>
          <p className="login__error">{errors.password || errorMessage}</p>

          <button className="login__button" disabled={!isValid}>
            Войти
          </button>
        </form>
        <p className="login__text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;

