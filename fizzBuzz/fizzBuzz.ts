'use strict';
function fizzbuzz(n: number) {
  for (let i = 1; i <= n; i++) {
    let by3 = i % 3;
    let by5 = i % 5;
    if (by5 == 0 && by3 == 0) console.log('FizzBuzz');
    else if (by5 != 0 && by3 == 0) console.log('Fizz');
    else if (by5 == 0 && by3 != 0) console.log('Buzz');
    else if (by5 != 0 && by3 != 0) console.log(i);
  }
}

fizzbuzz(15);
