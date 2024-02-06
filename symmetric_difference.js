'use strict';

/**
 * author: Mirco Palese
 * date: 3/02/2024
 *
 * calcualte simmetric difference between 2 or more array
 */
function sym(...args) {
  // prettier-ignore
  // removing duplicates
  const numbers = []
  for (const arr of args) {
    numbers.push(...new Set(arr));
  }

  numbers.sort();
  console.log(numbers);
  const res = [];

  let i = 0;
  while (i != numbers.length) {
    let val = numbers[i];
    let offset = numbers.lastIndexOf(val);
    if (offset == i) {
      res.push(val);
      i++;
    } else i = offset + 1;
  }
  return res;
}

const res = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
console.log(res);
