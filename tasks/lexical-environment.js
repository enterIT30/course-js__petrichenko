// Lexical environment ==================================================================================

function createCounterer() {
  let counter = 0;

  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };

  return myFunction;
}

const increment = createCounterer();

const c1 = increment();
const c2 = increment();
const c3 = increment();

