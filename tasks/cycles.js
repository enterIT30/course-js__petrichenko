//todo ЗАДАНИЯ НА ИСПОЛЬЗОВАНИЕ ЦИКЛОВ И УСЛОВИЙ=======================================

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

  let index = 0;

  for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[index] = i;
    index +=1;
  }

  return arrayOfNumbers;
}

//todo ПРОДВИНУТЫЕ ЗАДАНИЯ НА ЗНАНИЯ ЦИКЛОВ И УСЛОВИЙ==================================


// 1 ==================================================================================

function firstTask() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    result[i] = el;
  }

  return result;
}

console.log(firstTask());

// 2 ==================================================================================

function secondTask() {
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
      data[i] *= 2;
    } else if (typeof(data[i]) === 'string') {
      data[i] = `${data[i]}-done`;
    }
  }

  return data;
}

console.log(secondTask());


// 3 ==================================================================================

function thirdTask() {
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  for (let i = 0; i <= data.length; i++) {
    result[i] = data[data.length - i]
}

  return result;
}
console.log(thirdTask());

/* Правильны ответ
      for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }
*/

//todo ЗАДАЧА НА ФОРМИРОВАНИЕ ФИГУРЫ ===================================================

// ПОЛОВИНКА ЁЛОЧКИ=====================================================================

/*

*
**
***
****
*****
******

*/

const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }

  result += '\n';
}

console.log(result);


// ОБРАТНАЯ ПОЛОВИНКА ЁЛОЧКИ ============================================================

/*

     *
    **
   ***
  ****
 *****
******

 */

const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {
  for (let j = i; j < lines; j++) {
    result += ' ';
  }
  for (let k = 0; k < i; k++) {

    result += '*';
  }

  result += '\n';
}

console.log(result);



// МОЙ 1-Й ВАРИАНТ ЦЕЛОЙ ЁЛОЧКИ (3 ВЛОЖЕННЫХ ЦИКЛА В ОСНОВНОМ ЦИКЛЕ) ===================

/*

     *
    ***
   *****
  *******
 *********
***********

 */

const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {
  for (let j = i; j < lines; j++) {
    result += ' ';
  }
  for (let k = 0; k < i; k++) {
    result += '*';
  }
  for (let r = 1; r < i; r++) {
    result += '*';
  }


  result += '\n';
}

console.log(result);



// МОЙ 2-Й ВАРИАНТ ЦЕЛОЙ ЁЛОЧКИ (2 ВЛОЖЕННЫХ ЦИКЛА В ОСНОВНОМ ЦИКЛЕ) ===================

const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {
  for (let j = i; j < lines; j++) {
    result += ' ';
  }
  for (let k = 0; k <= ((i * 2) - 2); k++) {

    result += '*';
  }


  result += '\n';
}

console.log(result);


//! ОТВЕТ ЛЕКТОРА (2 ВЛОЖЕННЫХ ЦИКЛА В ОСНОВНОМ ЦИКЛЕ) =================================

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += "*";
    }
    result += "\n";
}


console.log(result);


// МЕТКИ ===============================================================================

for (let i = 0; i < 3; i++) {
  console.log(`First cycle: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second cycle: ${j}`);
    for (let k = 0; k < 3; k++) {
      console.log(`Third cycle: ${k}`);
    }
  }
}

first: for (let i = 0; i < 3; i++) {
  console.log(`First cycle: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second cycle: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        continue first;
      }
      console.log(`Third cycle: ${k}`);
    }
  }
}

for (let i = 0; i < 3; i++) {
  console.log(`First cycle: ${i}`);
  second: for (let j = 0; j < 3; j++) {
    console.log(`Second cycle: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        continue second;
      }
      console.log(`Third cycle: ${k}`);
    }
  }
}

/* 
First cycle: 0      First cycle: 0      First cycle: 0
Second cycle: 0     Second cycle: 0     Second cycle: 0
Third cycle: 0      Third cycle: 0      Third cycle: 0
Third cycle: 1      Third cycle: 1      Third cycle: 1
Third cycle: 2      First cycle: 1      Second cycle: 1
Second cycle: 1     Second cycle: 0     Third cycle: 0
Third cycle: 0      Third cycle: 0      Third cycle: 1
Third cycle: 1      Third cycle: 1      Second cycle: 2
Third cycle: 2      First cycle: 2      Third cycle: 0
Second cycle: 2     Second cycle: 0     Third cycle: 1
Third cycle: 0      Third cycle: 0      First cycle: 1
Third cycle: 1      Third cycle: 1      Second cycle: 0
Third cycle: 2                          Third cycle: 0
First cycle: 1                          Third cycle: 1
Second cycle: 0                         Second cycle: 1
Third cycle: 0                          Third cycle: 0
Third cycle: 1                          Third cycle: 1
Third cycle: 2                          Second cycle: 2
Second cycle: 1                         Third cycle: 0
Third cycle: 0                          Third cycle: 1
Third cycle: 1                          First cycle: 2
Third cycle: 2                          Second cycle: 0
Second cycle: 2                         Third cycle: 0
Third cycle: 0                          Third cycle: 1
Third cycle: 1                          Second cycle: 1
Third cycle: 2                          Third cycle: 0
First cycle: 2                          Third cycle: 1
Second cycle: 0                         Second cycle: 2
Third cycle: 0                          Third cycle: 0
Third cycle: 1                          Third cycle: 1
Third cycle: 2
Second cycle: 1
Third cycle: 0
Third cycle: 1
Third cycle: 2
Second cycle: 2
Third cycle: 0
Third cycle: 1
Third cycle: 2
*/

