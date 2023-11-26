class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  register(password, email, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
        name,
      }),
    }).then((res) => this._checkResponse(res));
  }

  login(password, email) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  editProfile(userData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((res) => this._checkResponse(res));
  }

  removeFilm(movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  addFilm(movie) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    }).then((res) => this._checkResponse(res));
  }
}

export default new MainApi("https://api.aleksandr.nomoredomainsrocks.ru");
