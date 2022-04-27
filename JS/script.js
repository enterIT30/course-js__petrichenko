'use strict';
let numberOfFilms;
const personalMovieDB = {
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  count() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 4);

    while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 4);
    }

    console.log(numberOfFilms);
  },

  detectPersonalLevel() {
    if (numberOfFilms < 10) {
      alert('Просмотренно довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
      alert('Вы классический зритель');
    } else if (numberOfFilms > 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },

  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      let lastFilm = prompt('Один из последних просмотренных фильмов?', 'godfather').trim();
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
  },

  showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenger() {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      if (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '' ) {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, index) => {
        console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });
  },

  toggleVisibleMyDB() {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false;
    }
  },
};

personalMovieDB.count();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();


personalMovieDB.writeYourGenger();
personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();


