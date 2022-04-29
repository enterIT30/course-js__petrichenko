const restorantData = {
  menu: [
      {
          name: 'Salad Caesar',
          price: '14$'
      },
      {
          name: 'Pizza Diavola',
          price: '9$'
      },
      {
          name: 'Beefsteak',
          price: '17$'
      },
      {
          name: 'Napoleon',
          price: '7$'
      }
  ],
  waitors: [
      {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],
  averageLunchPrice: '20$',
  openNow: true
};

// DONE ==================================================================================

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Открыто' : answer = 'Закрыто';

  return answer;
}

console.log(isOpen(restorantData.openNow));

// DONE ==================================================================================

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
      return 'Цена ниже средней';
  } else {
      return 'Цена выше средней';
  }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

// DONE ==================================================================================

function transferWaitors(data) {
  const copy = JSON.parse(JSON.stringify(data));

  copy.waitors[0] = {name: 'Mike', age: 32};
  return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);