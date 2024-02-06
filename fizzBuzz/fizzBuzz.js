'use strict';
function fizzbuzz(n) {
    for (var i = 1; i <= n; i++) {
        var by3 = i % 3;
        var by5 = i % 5;
        if (by5 == 0 && by3 == 0)
            console.log('FizzBuzz');
        else if (by5 != 0 && by3 == 0)
            console.log('Fizz');
        else if (by5 == 0 && by3 != 0)
            console.log('Buzz');
        else if (by5 != 0 && by3 != 0)
            console.log(i);
    }
}
fizzbuzz(15);
