import React, { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import MainApi from "../../utils/MainApi";
import { errorMessages } from "../../utils/Constant";

function Profile({ handleLogout, setUser }) {
  const { user } = useContext(CurrentUserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [editing, setEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isButtonDisable = name === user.name && email === user.email;

  const handleInputName = ({ target }) => {
    setName(target.value);
  };

  const handleInputEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");
    MainApi.editProfile({ name, email })
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
              className="profile__input-item"
              value={name}
              placeholder="Введите имя"
              onChange={handleInputName}
              disabled={!editing}
            />
          </div>
        </div>
        <div className="profile__inputs">
          <p className="profile__text">E-mail</p>
          <div className="profile__input">
            <input
              className="profile__input-item"
              value={email}
              placeholder="Введите email"
              onChange={handleInputEmail}
              disabled={!editing}
            />
          </div>
        </div>
        {errorMessage && <p className="profile__error">{errorMessage}</p>}
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

