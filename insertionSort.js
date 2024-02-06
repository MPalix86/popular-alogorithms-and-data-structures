/*
 * author: Mirco Palese
 * date: 3/02/2024
 *
 * The next sorting method we'll look at is insertion sort. This method works by building up a
 * sorted array at the beginning of the list. It begins the sorted array with the first element.
 * Then it inspects the next element and swaps it backwards into the sorted array until it is in
 * sorted position. It continues iterating through the list and swapping new items backwards into
 * the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
 *
 */
const insertionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};

const res = insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
console.log(res);
