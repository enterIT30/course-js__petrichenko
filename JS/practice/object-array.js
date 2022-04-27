const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  // 3 ==================================================================================
  showAgeAndLangs(plan) {

    let { age } = this;
    let { languages } = this.skills;
    let strLang = languages.join(' ').toUpperCase();


    return `Мне ${age} и я владею языками: ${strLang}`;

  },
/* ВАРИАНТ ЛЕКТОРА

    showAgeAndLangs: function(plan) {
    const {age} = plan;
    const {languages} = plan.skills;

    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function(lang) {
        str += `${lang.toUpperCase()} `;
    });

    return str;

  } */
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// 1 ==================================================================================

function showExperience(plan) {
  let { exp } = plan.skills;
  return exp;

/* 1-й вариант
  let experience = plan.skills.exp;
  return experience;
  */
}

//console.log(showExperience(personalPlanPeter));

// 2 ==================================================================================

function showProgrammingLangs(plan) {

/*1-й вариант


  let { js, php} = plan.skills.programmingLangs;

  return `
  Язык js изучен на ${js}
  Язык php изучен на ${php}
  `;
*/

  let { programmingLangs } = personalPlanPeter.skills;

  let result = '';

  for (let key in programmingLangs) {
    result += `Язык ${key} изучен на ${programmingLangs[key]} `;
  }

  return result;
}

//console.log(showProgrammingLangs(personalPlanPeter));

// ВАРИАНТ ЛЕКТОРА ==================================================================================

function showProgrammingLangs(plan) {
  let str = '';
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;
}

//console.log(showProgrammingLangs(personalPlanPeter));

// 4 ==================================================================================

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

  if (arr.length === 0) {
    return `Семья пуcта`;
  } else {
    let str = arr.join(' ');

    return `Семья соcтоит из: ${str}`;
  }
  
}

console.log(showFamily(family));


/* ВАРИАНТ ЛЕКТОРА

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });

    return str;
}

console.log(showFamily(family)); 
*/

// 5 ==================================================================================


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  for(let value of arr) {
    console.log(value.toLowerCase());
  }
}

standardizeStrings(favoriteCities);

// 6 ==================================================================================

const someString = 'This is some strange string';

function reverse(str) {
  let newStr = '';
  if (typeof(str) !== 'string') {
    return 'Ошибка';
  } else {
    for (let i = 0; i < str.length; i++) {
      newStr += str[(str.length -1) - i];
    }
  }
  return newStr;
}

console.log(reverse(someString));

// ВАРИАНТ ЛЕКТОРА ==================================================================================

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

/*Решение при помощи цикла
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr
    */
}

// 7 ==================================================================================

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr.length < 1) {
    return `Нет доступных валют`;
  } else {
    let result = 'Доступные валюты:\n';

    for (let value of arr) {
      if (value !== missingCurr) {
        result += (value + '\n');
      }
    }

    //return result.replace(missingCurr, ''); остается пробел
    return result;
  }
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// ВАРИАНТ ЛЕКТОРА ==================================================================================

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// 8 ==================================================================================

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 3
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
};

//console.log(shoppingMallData.shops[0]);

function isBudgetEnough(data) {
  let entireArea = null;

  data.shops.forEach(shop => {
    let { width, length } = shop;

    entireArea += width * length;
  });

  let entireVolume = entireArea * data.height;


  if ( (entireVolume * data.moneyPer1m3) < data.budget) {
    return `Бюджета достаточно`;
  } else {
    return `Бюджета недостаточно`;
  }
}

console.log(isBudgetEnough(shoppingMallData));

// ВАРИАНТ ЛЕКТОРА ==================================================================================

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach(shop => {
      square += shop.width * shop.length;
  });

  volume = data.height * square;

  if (data.budget - (volume * data.moneyPer1m3) >= 0) {
      return 'Бюджета достаточно';
  } else {
      return 'Бюджета недостаточно';
  }
}

console.log(isBudgetEnough(shoppingMallData));

// 9 ==================================================================================

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Taesi'];

function sortStudentsByGroups(arr) {
  arr.sort();

  let commandsOne = [];
  let commandsTwo = [];
  let commandsThree = [];
  let rest = [];
  

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      commandsOne.push(arr[i]);
    } else if (i < 6) {
      commandsTwo.push(arr[i]);
    } else if (i < 9) {
      commandsThree.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }

  let result;

  if (rest.length === 0) {
    result = '-';
  } else if (rest.length > 0) {
    result = rest.join(', ');
  }

  return [commandsOne, commandsTwo, commandsThree, `Оставшиеся студенты: ${result}`];

}

console.log(sortStudentsByGroups(students));


// ВАРИАНТ ЛЕКТОРА ==================================================================================

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));