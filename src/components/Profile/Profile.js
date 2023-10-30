import React, { useState } from 'react';


function Profile({ name, email }) {

   const [additing, setAdditing] = useState(false);

  return (
      <main className="profile">
         <form className="profile__form" >
            <h2 className="profile__welcome">Привет, {name}!</h2>
            <div className="profile__inputs">
               <p className="profile__text">Имя</p>
               <div className="profile__input">
                  <input className="profile__input-item" value={name} placeholder='Введите имя'/>
               </div>
            </div>
            <div className="profile__inputs"> 
               <p className="profile__text">E-mail</p>  
               <div className="profile__input">
                  <input className="profile__input-item" value={email} placeholder='Введите email'/>
               </div>  
            </div>
            <p className="profile__error profile__error_hidden">При обновлении профиля произошла ошибка.</p>
            {additing && <button className="profile__button-save" >Сохранить</button>}
         </form>  
         {!additing && <div  className="profile__buttons">
            <button className="profile__button" onClick={() => setAdditing(true)}>Редактировать</button>
            <button className="profile__link" type="button">Выйти из аккаунта</button> 
         </div>}  
      </main>
  );
}

export default Profile;