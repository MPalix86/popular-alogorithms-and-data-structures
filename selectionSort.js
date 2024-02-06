/**
 * author: Mirco Palese
 * date: 3/02/2024
 */

'use strict';
const selectionSort = function (arr) {
  let j = 0;
  while (j < arr.length) {
    let minIndex = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) minIndex = i;
    }
    if (minIndex != j) {
      const temp = arr[j];
      arr[j] = arr[minIndex];
      arr[minIndex] = temp;
    }
    j++;
  }
  return arr;
};

const res = selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(res);
