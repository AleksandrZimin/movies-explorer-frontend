import React, { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import { errorMessages } from "../../utils/Constant";
import { useFormWithValidation } from "../../hooks/useForm";

function Profile({ handleLogout, setUser }) {
  const { user } = useContext(CurrentUserContext);

  const [editing, setEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ name: user.name, email: user.email });

  const isButtonDisable =
    (values.name === user.name && values.email === user.email) || !isValid;


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    MainApi.editProfile({ name: values.name, email:values.email })
      .then((res) => {
        setUser(res);
        setEditing(false);
      })
      .catch((err) => {
        switch (err.status) {
          case 409:
            setErrorMessage(errorMessages.unicEmail);
            break;

          default:
            setErrorMessage(errorMessages.default);
            break;
        }
      });
  };

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__welcome">Привет, {user.name}</h2>
        <div className="profile__inputs">
          <p className="profile__text">Имя</p>
          <div className="profile__input">
            <input
              className={`profile__input-item ${
                errors.name ? "profile__input_error" : ""
              }`}
              value={values.name}
              placeholder="Введите имя"
              onChange={(event) => handleChange(event)}
              disabled={!editing}
              name="name"
              minLength={2}
              maxLength={30}
            />
          </div>
        </div>
        <div className="profile__inputs">
          <p className="profile__text">E-mail</p>
          <div className="profile__input">
            <input
              type="email"
              className={`profile__input-item ${
                errors.email ? "profile__input_error" : ""
              }`}
              value={values.email}
              placeholder="Введите email"
              onChange={(event) => handleChange(event)}
              disabled={!editing}
              name="email"
            />
          </div>
        </div>
        <p className="profile__error">
          {errors.name || errors.email || errorMessage}
        </p>
        {editing && (
          <button className="profile__button-save" disabled={isButtonDisable}>
            Сохранить
          </button>
        )}
      </form>
      {!editing && (
        <div className="profile__buttons">
          <button className="profile__button" onClick={() => setEditing(true)}>
            Редактировать
          </button>
          <button
            className="profile__link"
            type="button"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      )}
    </main>
  );
}

export default Profile;

