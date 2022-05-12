const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];

function showGoodFilms(arr) {
  return arr.filter(film => film.rating >= 8);

}

console.log(showGoodFilms(films));

//==================================================================================


function showListOfFilms(arr) {
  return arr.map(film => film.name).join(', ');
}

console.log(showListOfFilms(films));

/* Вариант лектора
function showListOfFilms(arr) {
  return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}
*/
//==================================================================================


function setFilmsIds(arr) {
  let newArr = [];
  arr.map((film, index) => {
    newArr[index] = film;
    newArr[index].id = index;
  });
  return newArr;
}

console.log(setFilmsIds(films));

/* Вариант лектора
function setFilmsIds(arr) {
  return arr.map((film, i) => {
      film.id = i;
      return film;
  });
}
*/
//==================================================================================

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every(item => {
    return item.id >= 0;
  });
}

console.log(checkFilms(tranformedArray));

// Варианты лектора
// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент

/*
function checkFilms(arr) {
  return arr.every(film => film.id || film.id === 0 ? true : false)
}
*/

// Еще короче, так как условие все равне вернет true или false:
/*
function checkFilms(arr) {
  return arr.every(film => film.id || film.id === 0)
}
*/

// Максимально коротко, но еще читаемо:

// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

//!==================================================================================

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  let sum = 0;
  data.map(item => {
    if (item.amount > 0) {
      sum += item.amount;
    }
  });
  return sum;
};

console.log(getPositiveIncomeAmount(funds));

/* Вариант лектора
const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
}

getPositiveIncomeAmount(funds);
*/



//==================================================================================

const getTotalIncomeAmount = (data) => {
  if (data.some(i => i.amount < 0)) {
    let sum = 0;
    data.forEach(item => {
      sum += item.amount;
    });
    return sum;
  } else {
    return getPositiveIncomeAmount(data);
  }
};

console.log(getTotalIncomeAmount(funds));


/*
const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
}
*/
//==================================================================================
