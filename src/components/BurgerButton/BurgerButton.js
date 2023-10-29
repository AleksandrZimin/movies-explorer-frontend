import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import Navigation from "../Navigation/Navigation";

function BurgerButton({handleClickBurger, isMenuVisible}) {

   return (

                <button 
                tabIndex={1}
                className={`burgerbutton ${isMenuVisible ? 'burgerbutton_active' : ''}`}
                onClick={handleClickBurger}
                >
                </button>
   )
}

export default BurgerButton;