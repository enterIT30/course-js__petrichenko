//todo ЗАДАНИЯ НА РАБОТУ С ФУНКЦИЯМИ ==================================================

// 1 ==================================================================================

function sayHello(name) {
  return `Привет, name`;
}

// 2 ==================================================================================

/* 1-й вариант */

function returnNeighboringNumbers(num) {
  let arr = [];
  let indexOne = num - 1;
  let indexTwo = num;
  let indexThree = num + 1;

  arr[0] = indexOne;
  arr[1] = indexTwo;
  arr[2] = indexThree;

  return arr;
}

console.log(returnNeighboringNumbers(99));


/* 2-й вариант */

function returnNeighboringNumbers(num) {
  let arr = [];

  arr[0] = num - 1;
  arr[1] = num;
  arr[2] = num + 1;

  return arr;
}

console.log(returnNeighboringNumbers(36));


/* 3-й вариант */

function returnNeighboringNumbers(num) {
  let arr = [];

  arr.push(num - 1);
  arr.push(num);
  arr.push(num + 1);

  return arr;
}

console.log(returnNeighboringNumbers(3));


/* Вариант лектора */

function returnNeighboringNumbers(num) {

  return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(190));


// 3 ==================================================================================

/* 1-й вариант */

function getMathResult(num, repet) {
  if (repet <= 0 || typeof(repet) !== 'number') {
    return num;
  }

  let result = '';
  for (let i = 0; i < repet; i++) {

    if ( (i + 1) === repet) {
      result += num + (num * i);
    } else {
      result += num + (num * i) + '---'; // `${num + num * i}---`
    }
  }
  return result;
}
console.log(getMathResult(3, 10));


/* Вариант лектора */

function getMathResult(num, times) {
  if (typeof(times) !== 'number' || times <= 0) {
      return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
      if (i === times) {
          str += `${num * i}`;
          // Тут без черточек в конце
      } else {
          str += `${num * i}---`;
          // Это тоже самое, что и
          // str = str + num * i + "---"
      }
  }

  return str;
}