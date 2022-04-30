'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Одержимость",
        "Лига справедливости",
        "Логан",
        "Ла-ла лэнд",

    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      promo = document.querySelector('.promo__bg'),
      genre = promo.querySelector('.promo__genre'),
      markList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
  item.remove();
});

genre.textContent = 'драма';
promo.style.backgroundImage = 'url("img/bg.jpg")';

markList.innerHTML = ''; // очистили от вложенных HTML-элементов


function createList() {
  movieDB.movies.sort();

  movieDB.movies.forEach((elem, index) => {
    markList.innerHTML += `
      <li class="promo__interactive-item">${index + 1}. ${elem}
        <div class="delete"></div>
      </li>
    `;
  });
}

createList();


//==================================================================================


const form = document.querySelector('.add');
//const input = form.querySelector('.adding__input');
const input = form.querySelector('[type="text"]');
const checkbox = form.querySelector('[type="checkbox"]');
const deleteIcons = markList.querySelectorAll('.delete');





form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (checkbox.checked) {
      console.log('Добавляем любимый фильм');
    }

    if (input.value.length <= 21 && input.value.length > 0) {
      movieDB.movies[movieDB.movies.length] = input.value;
      //createList();
      markList.innerHTML += `
      <li class="promo__interactive-item">${movieDB.movies.length}. ${input.value}
        <div class="delete"></div>
      </li>
      `;
    } else if (input.value.length > 21) {
      markList.innerHTML += `
      <li class="promo__interactive-item">${movieDB.movies.length}. ${input.value.slice(0, 21)}...
        <div class="delete"></div>
      </li>
      `;
    } else if (input.value == '' || input.value.length <= 0) {
      alert('Введи название фильма, долбаёб');
    }

    console.log(deleteIcons);
});




console.log(deleteIcons);

deleteIcons.forEach((icon, index) => {
  icon.addEventListener('click', e => {
    movieDB.movies.splice(index, 1);

    let films = markList.querySelectorAll('.promo__interactive-item');
    films[index].remove();
  });
});














// 1 ==================================================================================

// document.querySelector('.promo__adv').remove(); не совем правильно так как я удалил всю боковю панель

// 2 ==================================================================================

/* const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма'; */

// лучше создать переменную promo и через нее найти genre

// 3 ==================================================================================

/*
const promo = document.querySelector('.promo__bg');
promo.style.backgroundImage = 'url(img/bg.jpg)';
*/

/* Вариант с cssText
promo.style.cssText = `
  background-image: url(img/bg.jpg)`;
*/


// 5 ==================================================================================

/*
const markList = document.querySelector('.promo__interactive-list');
const numList = document.createElement('ol');

markList.replaceWith(numList);
numList.classList.add('promo__interactive-list'); */

/* Хотел добавить нумерацию за счет смены ul на ol, но встала проблема со стилсями и было 
принято решение создать нумерацию при помощи forEach */

// 4 ==================================================================================

/*
const moviesSort = movieDB.movies.sort(); // лектор не помещал сорт в переменную

moviesSort.forEach((elem, index) => {
  const li = document.createElement('li');
  li.classList.add('promo__interactive-item');
  li.textContent = `${index + 1}. ${elem}`;
  numList.append(li);
});

*/

