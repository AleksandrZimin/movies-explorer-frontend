import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

function SearchForm({ email, handleLogout }) {
   return (
        <div className="searchform">
            <input className="searchform-input" type="text" placeholder="Фильм"></input>
            <button className="searchform-button"></button> 
        </div>
    );
}

export default SearchForm;