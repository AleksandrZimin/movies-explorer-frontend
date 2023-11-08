export default class FilmDTO {
   constructor(filmData) {
      this.country = filmData.country;
      this.description = filmData.description;
      this.director = filmData.director;
      this.duration = filmData.duration;
      this.movieId = filmData.id;
      this.image = `https://api.nomoreparties.co${filmData.image.url}`;
      this.nameEN = filmData.nameEN;
      this.nameRU = filmData.nameRU;
      this.trailerLink = filmData.trailerLink;
      this.year = filmData.year;
      this.thumbnail = `https://api.nomoreparties.co${filmData.image.previewUrl}`; 
   }
}