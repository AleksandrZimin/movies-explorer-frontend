import React, { useState } from "react";
import { Routes, Link, Route } from "react-router-dom";

function FilterCheckbox({ email, handleLogout }) {
   return (
        <div className="filtercheckbox">
            <label class="checkbox" for="checkbox">
               <input class="checkbox__input" type="checkbox" id="checkbox"/>
               <span class="checkbox__inner">Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox;