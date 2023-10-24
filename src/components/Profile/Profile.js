import React from 'react';


function Profile({ name, email }) {
  return (
      <section className="profile">
         <form className="profile__form" >
            <h2 className="profile__welcome">Привет, {name}!</h2>
            <div className="profile__inputs">
               <p className="profile__text">Имя</p>
               <div className="profile__input">
                  <input className="profile__input_item" value={name}/>
               </div>
            </div>
            <div className="profile__inputs"> 
               <p className="profile__text">E-mail</p>  
               <div className="profile__input">
                  <input className="profile__input_item" value={email}/>
               </div>  
            </div>
         </form>  
         <div  className="profile__buttons">
            <button className="profile__button">Редактировать</button>
            <button className="profile__link" type="button">Выйти из аккаунта</button> 
         </div> 
      </section>
  );
}

export default Profile;