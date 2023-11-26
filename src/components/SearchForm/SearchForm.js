import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ submitHandler }) {
  const [name, setName] = React.useState("");
  const [check, setCheck] = React.useState(false);
  const { pathname } = useLocation();
  const isSavedPage = pathname === "/saved-movies";

  useEffect(() => {
    if (isSavedPage) return;

    setName(localStorage.getItem("name"));
    setCheck(JSON.parse(localStorage.getItem("check")));
  }, []);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitHandler(name, check);
  };

  const handleCheckBox = ({ target }) => {
    setCheck(target.checked);
    submitHandler(name, target.checked);
  };

  return (
    <form className="searchform" onSubmit={handleSubmit}>
      <div className="searchform__block">
        <input
          className="searchform-input"
          type="text"
          placeholder="Фильм"
          value={name}
          onChange={handleChangeName}
        ></input>
        <button className="searchform-button" type="submit"></button>
      </div>
      <FilterCheckbox handler={handleCheckBox} value={check} />
    </form>
  );
}

export default SearchForm;

