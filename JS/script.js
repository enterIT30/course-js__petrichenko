const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 4);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for (let i = 0; i < 2; i++) {
  let lastFilm = prompt('Один из последних просмотренных фильмов?', 'godfather');
  let scoreFilm = prompt('На сколько оцените его?', 8);

  if (lastFilm != null && scoreFilm != null &&
      lastFilm != '' && scoreFilm != '' &&
      lastFilm.length < 50  && scoreFilm <= 10 && scoreFilm >= 0) {
        personalMovieDB.movies[lastFilm] = scoreFilm;
        console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}


console.log(personalMovieDB);
console.log(personalMovieDB.movies);