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

    let { age } = plan;
    let { languages } = plan.skills;
    let strLang = languages.join(' ').toUpperCase();


    return `Мне ${age} и я владею языками: ${strLang}`;

  },
/*   showAgeAndLangs: function(plan) {
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

/* .toUpperCase() */

// 1 ==================================================================================

function showExperience(plan) {
  let { exp } = plan.skills;
  return exp;

  /*
  let experience = plan.skills.exp;
  return experience;
  */
}

//console.log(showExperience(personalPlanPeter));

// 2 ==================================================================================

function showProgrammingLangs(plan) {


  let { js, php} = plan.skills.programmingLangs;

  return `
  Язык js изучен на ${js}
  Язык php изучен на ${php}
  `;
}

console.log(showProgrammingLangs(personalPlanPeter));

// ВАРИАНТ ЛЕКТОРА ==================================================================================

function showProgrammingLangs(plan) {
  let str = '';
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
  }

  return str;
}

//console.log(showProgrammingLangs(personalPlanPeter));