import React from "react";

function NavTab() {
  return (
    <div className="navtab">
      <a href="#about" className="navtab__link">
        О проекте
      </a>
      <a href="#techs" className="navtab__link">
        Технологии
      </a>
      <a href="#aboutme" className="navtab__link">
        Студент
      </a>
    </div>
  );
}

export default NavTab;

