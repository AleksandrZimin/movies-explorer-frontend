import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Login from "../Login/Login.js";
import Register from "../Register/Register.js";
import ErrorPage from "../ErrorPage/ErrorPage.js";
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import { errorMessages } from "../../utils/Constant.js";
import MainApi from "../../utils/MainApi.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [userLogin, setUserLogin] = useState(false);
  const [userMovies, setUserMovies] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      MainApi.getUser()
        .then((res) => {
          if (res) {
            setUserLogin(true);
          }
        })
        .catch((err) => handleLogout())
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
    
  }, []);

  useEffect(() => {
    if (userLogin) {
      Promise.all([MainApi.getUser(), MainApi.getMovies()])
        .then(([user, films]) => {
          setUserMovies(films);
          setUser(user);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
    }
  }, [userLogin]);

  const handleRegister = (name, email, password) => {
    setErrorMessage("");
    MainApi.register(password, email, name)
      .then((res) => {
        handleLogin(password, email);
      })
      .catch((err) => {
        switch (err.status) {
          case 409:
            setErrorMessage(errorMessages.unicEmail);
            break;

          default:
            setErrorMessage(errorMessages.default);
            break;
        }
      });
  };

  const handleLogin = (password, email) => {
    setErrorMessage("");
    MainApi.login(password, email)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setUserLogin(true);
        navigate("/movies")
      })
      .catch((err) => {
        switch (err.status) {
          case 401:
            setErrorMessage(errorMessages.loginFail);
            break;
          default:
            setErrorMessage(errorMessages.default);
            break;
        }
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserLogin(false);
    navigate("/");
  };

  return (
    <div className="App">
      { !isLoading && 
      <div className="page">
        <CurrentUserContext.Provider value={{ user }}>
          <Header isAuth={userLogin} />
          <Routes>
            <Route
              path="/signin"
              element={
                <Login handleLogin={handleLogin} errorMessage={errorMessage} />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  handleRegister={handleRegister}
                  errorMessage={errorMessage}
                />
              }
            />
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  loggedIn={userLogin}
                  element={Movies}
                  userMovies={userMovies}
                  setUserMovies={setUserMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={userLogin}
                  element={SavedMovies}
                  userMovies={userMovies}
                  setUserMovies={setUserMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  loggedIn={userLogin}
                  element={Profile}
                  handleLogout={handleLogout}
                  setUser={setUser}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </CurrentUserContext.Provider>
      </div>
      }
    </div>
    
  );
}

export default App;

