'use strict';
/**
 * author: Mirco Palese
 * date: 4/02/2024
 *
 * Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element.
 * It operates using the following steps:
 *
 * 1. Find the middle value of a sorted array.
 *    - If value == target, return true (The value has been found, and the search is complete).
 * 2. If the middle value < target, search the right half of the array in the next comparison.
 * 3. If the middle value > target, search the left half of the array in the next comparison.
 * 4. If, after searching the whole array, the value is not present, return false
 *    (The array has been searched, and the value is not in the array).
 *
 * As you can see, you are successively halving an array, which gives you the log(n) efficiency.
 * For this challenge, we want you to show your work - how you got to the target value... the path you took!
 */

const binarySearch = function (arr, target) {
  if (arr.length == 0) 'Value Not Found';
  const halfIndex = Math.floor(arr.length / 2);
  const arrValue = arr[halfIndex];
  if (target == arrValue) return target;
  else if (target > arrValue) return binarySearch(arr.slice(halfIndex + 1, arr.length), target);
  else return binarySearch(arr.slice(0, halfIndex), target);
};

const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

console.time('bs');
const res = binarySearch(testArray, 90);
console.timeEnd('bs');
console.log('trovato', res);
