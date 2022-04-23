//todo ЗАДАНИЯ НА ИСПОЛЬЗОВАНИЕ ЦИКЛОВ И УСЛОВИЙ=====================================

// 1 ==================================================================================

function firstTask() {
  for (let i = 5; i <= 10; i++) {
      console.log(i);
  }
}

// 2 ==================================================================================

function secondTask() {
  for (let i = 20; i >= 10; i--) {
      if (i === 13) break;
      console.log(i);
  }
}

// 3 ==================================================================================

function thirdTask() {
  // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
      if (i % 2 === 0) {
      console.log(i);
      }
    }
}

// 4 ==================================================================================

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
  // Пишем решение вот тут
  let i = 2;

  while ( i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}

// 5 ==================================================================================

function fifthTask() {
  const arrayOfNumbers = [];

  // Пишем решение вот тут
  let index = 0;

  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[index] = i;
    index +=1;
  }

  // Не трогаем
  return arrayOfNumbers;
}

//todo ПРОДВИНУТЫЕ ЗАДАНИЯ НА ЗНАНИЯ ЦИКЛОВ И УСЛОВИЙ================================


// 1 ==================================================================================

function firstTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    result[i] = el;
  }

  // Не трогаем
  return result;
}

console.log(firstTask());

// 2 ==================================================================================

// Место для второй задачи
function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
  for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
      data[i] *= 2;
    } else if (typeof(data[i]) === 'string') {
      data[i] = `${data[i]}-done`;
    }
  }
  // Не трогаем
  return data;
}

console.log(secondTask());


// 3 ==================================================================================

function thirdTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  // Пишем решение вот тут
  for (let i = 0; i <= data.length; i++) {
    result[i] = data[data.length - i]
}

  // Не трогаем
  return result;
}
console.log(thirdTask());

/* Правильны ответ
      for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }
*/
