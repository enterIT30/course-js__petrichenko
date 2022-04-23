const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 4),
      lastFilm = prompt('Один из последних просмотренных фильмов?', 'godfather'),
      scoreFilm = +prompt('На сколько оцените его?', 8),
      lastFilmTwo = prompt('Один из последних просмотренных фильмов?', 'godfather'),
      scoreFilmTwo = +prompt('На сколько оцените его?', 8);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[lastFilm] = scoreFilm;
personalMovieDB.movies[lastFilmTwo] = scoreFilmTwo;

console.log(personalMovieDB);
console.log(personalMovieDB.movies);
