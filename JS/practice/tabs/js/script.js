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
});
