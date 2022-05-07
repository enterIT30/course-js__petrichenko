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

  const deadline = '2022-05-16';

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
  const buttonClose = document.querySelector('.modal__close');

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

  buttonClose.addEventListener('click', closeModal);


  modal.addEventListener('click', (e) => {

    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 10000);

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
        <div class="${this.main}">
          <img src="img/tabs/${this.path}.jpg" alt="${this.path}">
          <h3 class="${this.main}-subtitle">Меню "${this.menu}"</h3>
          <div class="${this.main}-descr">Меню "${this.menu}" - ${this.descr}</div>
          <div class="${this.main}-divider"></div>
          <div class="${this.main}-price">
            <div class="${this.main}-cost">Цена:</div>
            <div class="${this.main}-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
    }
  }


  let descrMenu = 'это новый подход к экономии и выживанию. Неповторимый тандем хлеба по уцененке с просроченной колбасой, дают обширный букет вкусовых отенков. А самое главное, что данное меню зарекомендовало себя как бюджетный вариант перекуса, который снабжает необходимым количеством калорий макроэлементов на весь день. <br> ЕСТЬ ПРЕМИУМ ВАРИАНТ С ДОБАВЛЕНИЕМ МАЙОНЕ!';

  const newCard = new Card('.menu__field .container', 'menu__item', 'student', 'Бедный студент', descrMenu, 49);

  newCard.createMainEl();

  // Lecturer's version

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
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

      element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
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

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Вариант лектора”",
    'Меню “Вариант лектора” - эта карточка сделанна при помощи классов и это вариант лектора курса. Я же сделал предыдущую карточку, студеннческую. Есть разница в исполнении, но считаю, что суть классов я понял.',
    9,
    '.menu .container'
  ).render();

});
