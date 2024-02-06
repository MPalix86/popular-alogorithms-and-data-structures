'use strict';
/**
 * author: Mirco Palese
 * date: 3/02/2024
 *
 * Return the number of total permutations of the provided string that don't
 * have repeated consecutive letters.
 * Assume that all characters in the provided string are each unique.
 */

const fattoriale = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
};

const ripetizioni = (str) => {
  str = str.split('').sort().join('');
  let i = 0;
  let j = 0;
  const repArr = [];
  while (i != str.length) {
    const l = str[i];
    let offset = str.lastIndexOf(l);
    if (offset != i) {
      i = offset + 1;
      let repetitions = 0;
      for (const l1 of str) {
        if (l == l1) repetitions++;
      }
      if (repetitions > 1) {
        console.log(`trovata ripetizione ${l}`);
        repArr[j] = repetitions;
        j++;
      }
    } else i++;
  }
  return repArr;
};

const calculatePerm = function (str) {
  const permutations = fattoriale(str.length);
  const repetititons = ripetizioni(str);
  console.log(repetititons);
  if (repetititons == str.length) return 0;
  let subtract = 0;
  for (let num of repetititons) {
    subtract += num * num * fattoriale(str.length - num) * num;
  }
  const res = permutations();
  return res;
};

const val = calculatePerm('abcdefa');
console.log(val);
