import React from 'react';
import { useState, useEffect } from "react";
import { Routes, Route, redirect, useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from '../Main/Main.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import ErrorPage from '../ErrorPage/ErrorPage.js';
import Movies from '../Movies/Movies.js';
import Profile from '../Profile/Profile.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';

function App() {
  return (
    <div className="App">
      <div className="page">
        
        <Routes>
          <Route path="/signin" element={<Login />}/>
          <Route path="/signup" element={<Register />}/>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Main /> 
                <Footer />
              </>
            }
          />
          <Route 
            path="/movies" 
            element={
              <>
                <Header />
                <Movies /> 
                <Footer />
              </>
            }
          />
          <Route 
            path="/saved-movies" 
            element={
              <>
                <Header />
                <SavedMovies /> 
                <Footer />
              </>
            }
          />
          <Route 
            path="/profile" 
            element={
              <>
                <Header />
                <Profile /> 
              </>
            }
          />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
