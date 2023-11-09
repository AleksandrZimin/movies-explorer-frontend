class MoviesApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getMovies() {
    return fetch(`${this.baseUrl}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }
}

export default new MoviesApi("https://api.aleksandr.nomoredomainsrocks.ru");