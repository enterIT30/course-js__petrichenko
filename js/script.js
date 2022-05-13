'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 4);

    while (personalMovieDB.count == '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 4);
    }

    //console.log(personalMovieDB.count);
  },

  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
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
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '' ) {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, index) => {
        console.log(`Любимый жанр ${index + 1} - это ${item}`);
    });

    /* Вариант с одним вопросом
    for (let i = 1; i < 2; i++) {
      let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '' ) {
        i--;
      } else {
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort(); // сортировка по алфавиту
        console.log(personalMovieDB.genres);
      }
    }
    personalMovieDB.genres.forEach((item, index) => {
        console.log(`Любимый жанр ${index + 1} - это ${item}`);
    }); */
  },

  toggleVisibleMyDB() {
    if (personalMovieDB.privat) { //можно не указывать === false или === true, но снача условия на true
      personalMovieDB.privat = false;
      console.log(personalMovieDB.privat);
    } else {
      personalMovieDB.privat = true;
      console.log(personalMovieDB.privat);
    }
  },
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenger();
//personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();


