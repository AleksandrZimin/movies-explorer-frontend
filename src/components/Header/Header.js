import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";
import logo from "../../images/logo.png";

function Header({ isAuth }) {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClickBurger = () => {
    setIsMenuVisible(!isMenuVisible)
    
  }

   return (
        <header className="header">
          <Link to="/"><img src={logo} alt="Логотип" className="header__logo" /></Link>
          { isAuth 
          ? <div className="header__menu">
            <div className="header__links">
                <NavLink to="/movies" className="header__link">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="header__link">Cохраненные фильмы</NavLink>
            </div>
                <NavLink to="/profile" className="header__button">Аккаунт</NavLink>
                <BurgerButton isMenuVisible={isMenuVisible} handleClickBurger={handleClickBurger} />
            {isMenuVisible && <Navigation  />}
           </div> 
          : <div className="header__auth">
              <NavLink to="/signup" className="header__signup">Регистрация</NavLink>
              <NavLink to="/signin" className="header__signin">Войти</NavLink>  
           </div> }
        </header>
    );
}

export default Header;