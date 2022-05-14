'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        markList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

  let deleteAdv = (arr) => {
    arr.forEach(item => {
      item.remove();
    });
  };

  deleteAdv(adv);


  let makeChanges = () => {
    genre.textContent = 'драма';
    promo.style.backgroundImage = 'url("img/bg.jpg")';
  };

  makeChanges();


  let sortArr = (arr) => {
    arr.sort();
  };

  //sortArr(movieDB.movies);


  function createMovieList(films, parent) {
    parent.innerHTML = ''; // очистили от вложенных HTML-элементов

    sortArr(films);

    films.forEach((elem, index) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${index + 1}. ${elem}
        <div class="delete"></div>
      </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', function(e) {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  createMovieList(movieDB.movies, markList);


  addForm.addEventListener('submit', event => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('Добавляем любимый фильм');
      }

      movieDB.movies.push(newFilm);
      createMovieList(movieDB.movies, markList);
    }

    event.target.reset();
  });
});