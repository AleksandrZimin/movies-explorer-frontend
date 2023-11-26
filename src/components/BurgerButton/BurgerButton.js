import React from "react";

function BurgerButton({ handleClickBurger, isMenuVisible }) {
  return (
    <button
      tabIndex={1}
      className={`burgerbutton ${isMenuVisible ? "burgerbutton_active" : ""}`}
      onClick={handleClickBurger}
    ></button>
  );
}

export default BurgerButton;

