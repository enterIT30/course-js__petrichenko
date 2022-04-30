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




function createList() {
  markList.innerHTML = ''; // очистили от вложенных HTML-элементов
  movieDB.movies.sort();

  movieDB.movies.forEach((elem, index) => {

    if (elem.length <= 21 && elem.length > 0) {
      markList.innerHTML += `
      <li class="promo__interactive-item">${index + 1}. ${elem}
        <div class="delete"></div>
      </li>
      `;
    } else if (elem.length > 21) {
      markList.innerHTML += `
      <li class="promo__interactive-item">${index + 1}. ${elem.slice(0, 21)}...
        <div class="delete"></div>
      </li>
      `;
    }
  });
}

createList();
console.log(markList);


//==================================================================================


const form = document.querySelector('.add');
//const input = form.querySelector('.adding__input');
const input = form.querySelector('[type="text"]');
const checkbox = form.querySelector('[type="checkbox"]');

let deleteIcons = markList.querySelectorAll('.delete');



form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (checkbox.checked) {
      console.log('Добавляем любимый фильм');
    }

    if (input.value.length <= 21 && input.value.length > 0) {
      movieDB.movies[movieDB.movies.length] = input.value;
      createList();
    } else if (input.value.length > 21) {
      movieDB.movies[movieDB.movies.length] = input.value;
      createList();
    } else if (input.value == '' || input.value.length <= 0) {
      alert('Введи название фильма, долбаёб');
    }
    console.log(movieDB.movies);

    deleteIcons = markList.querySelectorAll('.delete');
    console.log(deleteIcons);
});




console.log(movieDB.movies);
console.log(deleteIcons);


markList.addEventListener('click', function(e) {
  let targetItem = e.target;

  if (targetItem.closest('.delete')) {
    targetItem.parentElement.remove();
    console.dir(targetItem);
    
  }
});

/*
deleteIcons.forEach((icon, index) => {
  icon.addEventListener('click', e => {

    console.log('hi');

    movieDB.movies.splice(index, 1);
    deleteIcons[index].remove();

    let films = markList.querySelectorAll('.promo__interactive-item');
    films[index].remove();

    console.log(movieDB.movies);
    console.log(deleteIcons);

  });

}); */

