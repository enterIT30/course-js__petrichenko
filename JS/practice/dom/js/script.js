/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1 ==================================================================================

document.querySelector('.promo__adv').remove();

// 2 ==================================================================================
const genre = document.querySelector('.promo__genre');
console.log(genre);

genre.textContent = 'драма';

// 3 ==================================================================================

const promo = document.querySelector('.promo__bg');
promo.style.backgroundImage = 'url(img/bg.jpg)';
/*
promo.style.cssText = `
  background-image: url(img/bg.jpg)`; */




// 5 ==================================================================================

const markList = document.querySelector('.promo__interactive-list');
const numList = document.createElement('ol');

markList.replaceWith(numList);

numList.classList.add('promo__interactive-list');
/* Хотел добавить нумерацию за счет смены ul на ol, но встала проблема со стилсями и было 
принято решение создать нумерацию при помощи forEach */

// 4 ==================================================================================

const moviesSort =movieDB.movies.sort();

moviesSort.forEach((elem, index) => {
  const li = document.createElement('li');
  li.classList.add('promo__interactive-item');
  li.textContent = `${index + 1}. ${elem}`;
  numList.append(li);
});

