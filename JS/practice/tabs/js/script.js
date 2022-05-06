window.addEventListener('DOMContentLoaded', ()=> {
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
});


/* if (event && event.classList.contains !== 'tabheader__item_active') */
/* if (event.classList.contains !== 'tabheader__item_active') */

/* if (event.closest() !== 'tabheader__item_active') ????*/
