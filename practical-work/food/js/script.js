window.addEventListener('DOMContentLoaded', ()=> {
  // Tabs

  const tabContent =document.querySelectorAll('.tabcontent');
  const tabItem =document.querySelectorAll('.tabheader__item');
  const tabsWrapper = document.querySelector('.tabheader__items');


  let hideTabContent = () => {
    tabContent.forEach(content => {
      content.classList.add('hide');
      content.classList.remove('show', 'fade');

    });

    tabItem.forEach(tab => {
      tab.classList.remove('tabheader__item_active');
    });
  };

  let showActiveTabContent = (num = 0) => {
    tabContent[num].classList.add('show');
    tabContent[num].classList.remove('hide');
    tabContent[num].classList.add('fade');

    tabItem[num].classList.add('tabheader__item_active');
  };

  hideTabContent();
  showActiveTabContent();

  tabsWrapper.addEventListener('click', e => {
    let event = e.target;
    if (event && event.classList.contains('tabheader__item')) {
      tabItem.forEach((item, index) => {
        if (event == item) {
          hideTabContent();
          showActiveTabContent(index);
        }
      });
      event.classList.add('tabheader__item_active');
    }
  });

  // Timer

  const deadline = '2022-10-10';

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const total = Date.parse(endtime) - Date.parse(new Date());

    if (total <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(total / (1000 * 60 * 60 * 24));
      hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((total / (1000 * 60)) % 60);
      seconds = Math.floor((total / 1000) % 60);
    }

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const timeObj = getTimeRemaining(endtime);

      days.innerHTML= getZero(timeObj.days);
      hours.innerHTML= getZero(timeObj.hours);
      minutes.innerHTML= getZero(timeObj.minutes);
      seconds.innerHTML= getZero(timeObj.seconds);

      if (timeObj.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  // Modal

  const buttons = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {

    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      /**
       *нужно отследить когда пользователь прокрутил до конца страницы
       *сколько сверху прокрутил по Y + высота (клиента) видимой части >= полной высоты элемента
       * можно добавить минус один для перестраховки
       * */
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  // Cards
/* 
  class Card {
    constructor(wrapper, mainClass, picPath, menuName, descrMenu, priceMenu) {
      this.wrapper = wrapper;
      this.main = mainClass;
      this.path = picPath;
      this.menu = menuName;
      this.price = priceMenu;
      this.descr = descrMenu;
    }
    createMainEl() {
      const wrapperCards = document.querySelector(this.wrapper);
      const newCard = document.createElement('div');
      newCard.classList.add(this.main);
      wrapperCards.append(newCard);

      newCard.innerHTML = `
        <img src="img/tabs/${this.path}.jpg" alt="${this.path}">
        <h3 class="${this.main}-subtitle">Меню "${this.menu}"</h3>
        <div class="${this.main}-descr">Меню "${this.menu}" - ${this.descr}</div>
        <div class="${this.main}-divider"></div>
        <div class="${this.main}-price">
          <div class="${this.main}-cost">Цена:</div>
          <div class="${this.main}-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
    }
  }


  let descrMenu = 'это новый подход к экономии и выживанию. Неповторимый тандем хлеба по уцененке с просроченной колбасой, дают обширный букет вкусовых отенков. А самое главное, что данное меню зарекомендовало себя как бюджетный вариант перекуса, который снабжает необходимым количеством калорий макроэлементов на весь день. <br> ЕСТЬ ПРЕМИУМ ВАРИАНТ С ДОБАВЛЕНИЕМ МАЙОНЕ!';

  const newCard = new Card('.menu__field .container', 'menu__item', 'student', 'Бедный студент', descrMenu, 49);

  newCard.createMainEl();
 */
  // Lecturer's version

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.classes = classes;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        element.classList.add('menu__item');
      } else {
        this.classes.forEach(className => {
          element.classList.add(className);
        });
      }

      element.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  /* обычный вызов
  const div = new MenuCard();
  div.render();
  */


  /* сокращенный
  new MenuCard().render();
  */

  const getRecource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getRecource('http://localhost:3000/menu')
    .then(data => {
      data.forEach(({ img, altimg, title, descr, price }) => {
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
    });
    
/* 
  getRecource('http://localhost:3000/menu')
    .then(data => createCard(data));

  function createCard(data) {
    data.forEach(({ img, altimg, title, descr, price }) => {
      const element = document.createElement('div');

      element.classList.add('menu__item');

      element.innerHTML = `
        <img src=${img} alt=${altimg}>
        <h3 class="menu__item-subtitle">${title}</h3>
        <div class="menu__item-descr">${descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${price}</span> грн/день</div>
        </div>
      `;

      document.querySelector('menu .container').append(element);
    });
  }
 */
/* 
  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Вариант лектора”",
    'Меню “Вариант лектора” - эта карточка сделанна при помощи классов и это вариант лектора курса. Я же сделал предыдущую карточку, студеннческую. Есть разница в исполнении, но считаю, что суть классов я понял.',
    9,
    '.menu .container',
    'menu__item',
    'test-class'
  ).render();

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    "Меню “Вариант rest”",
    'Меню “Вариант rest” - эта карточка сделанна для того, чтобы проверить работу rest оператора. Здесь заданы два класса и эти классы отображаются. В пердыдущей карточке, классы не задавались в параметрах. Проверка работы по умолчанию.',
    9,
    '.menu .container',
    'menu__item',
    'test-class'
  ).render();
 */


  // Form (почти ничего не понял)

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...',
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);
/*
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
*/

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData(' http://localhost:3000/requests', json)
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        form.reset();
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
/*
      request.addEventListener('load', () => {
        if (request.status === 200) {
          console.log(request.response);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        } else {
          showThanksModal(message.failure);
        }
      });
       */
    });
  }

  //Spinner form and ThanksModal

  function showThanksModal(massage) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${massage}</div>
      </div>
    `;

    modal.append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

/* Пример с JSONplaceholder
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
*/

  fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then(res => console.log(res));


  // Slider

  const btnSliderNext = document.querySelector('.offer__slider-next');
  const btnSliderPrev = document.querySelector('.offer__slider-prev');
  const slides = document.querySelectorAll('.offer__slide');
  const current = document.querySelector('#current');
  const total = document.querySelector('#total');
  const slidesWrapper = document.querySelector('.offer__slider-wrapper');
  const slidesField = document.querySelector('.offer__slider-inner');
  const width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  btnSliderNext.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });

  btnSliderPrev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1)
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  });
});


