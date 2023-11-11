import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import Logo from "../../images/logo.png";
import { useFormWithValidation } from "../../hooks/useForm";

function Register({ handleRegister, errorMessage }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setErrors,
    setIsValid,
  } = useFormWithValidation({ name: "", email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister(values.name, values.email, values.password);
    // MainApi.register(password, email, name)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     switch (err.status) {
    //       case 400:
    //         setErrorMessage(errorMessages.registerFail);
    //         break;
    //       case 409:
    //         setErrorMessage(errorMessages.unicEmail);
    //         break;

    //       default:
    //         setErrorMessage(errorMessages.serverError);
    //         break;
    //     }
    //   });
  };

  const handleInputEmail = (event) => {
    handleChange(event);
    if (!isEmail(event.target.value)) {
      setErrors({ ...errors, email: "Невалидный Email" });
      setIsValid(false);
    }
  };

  return (
    <main className="register">
      <section className="register__container">
        <Link to="/">
          <img className="register__logo" alt="Лого" src={Logo}></img>
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <label className="register__label">Имя</label>
          <input
            className={`register__input ${
              errors.name ? "register__input_error" : ""
            }`}
            type="text"
            placeholder="Введите имя"
            value={values.name}
            onChange={(event) => handleChange(event)}
            required
            name="name"
            minLength={2}
            maxLength={30}
          ></input>
          <p className="register__error">{errors.name}</p>

          <label className="register__label">E-mail</label>
          <input
            className={`register__input ${
              errors.email ? "register__input_error" : ""
            }`}
            type="email"
            placeholder="Введите email"
            value={values.email}
            onChange={handleInputEmail}
            required
            name="email"
          ></input>
          <p className="register__error">{errors.email}</p>

          <label className="register__label">Пароль</label>
          <input
            className={`register__input ${
              errors.password ? "register__input_error" : ""
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
          <p className="register__error">{errors.password || errorMessage}</p>

          <button
            className="register__button"
            disabled={!isValid || errors.email}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="register__text">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Register;

