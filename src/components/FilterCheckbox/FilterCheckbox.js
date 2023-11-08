import React from "react";

function FilterCheckbox({ value, handler }) {
  return (
    <div className="filtercheckbox">
      <label className="checkbox" htmlFor="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          id="checkbox"
          onChange={handler}
          checked={value}
        />
        <span className="checkbox__inner">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;

