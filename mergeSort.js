/**
 * author: Mirco Palese
 * date: 4/02/2024
 *
 * Merge Sort Algorithm Explanation:
 *
 * Merge Sort is an intermediate sorting algorithm that utilizes
 * a divide-and-conquer, recursive methodology to sort an array.
 *
 * It takes advantage of the ease of sorting two arrays when each is
 * already sorted. The process starts with a single array as input.
 *
 * The recursive division of the original input continues until
 * reaching the base case of an array with only one item. A
 * single-item array is naturally considered sorted.
 *
 * The subsequent merging phase combines the sorted sub-arrays.
 * This merging process unwinds the recursive calls that initially
 * split the original array, eventually producing a final sorted
 * array containing all the elements.
 *
 * The steps of merge sort can be summarized as follows:
 *
 * 1) Recursively split the input array in half until a sub-array
 *    with only one element is produced.
 *
 * 2) Merge each sorted sub-array together to produce the final
 *    sorted array.
 */

const mergeSort = function (arr) {
  // console.log(arr);
  if (arr.length <= 1) return arr;
  const half = Math.round(arr.length / 2);
  // console.log(half);
  /**
   * This might be confusing, but it's important to note that the return statement below occurs only once,
   * namely when all other recursive merge sorts have finished. This is because all subsequent recursive merge sorts
   * will always be invoked until the array becomes a single element, at which point the condition above will cause
   * the function to return, resulting in only one number being returned at a time!
   * Here's an example!
   *
   * input [2,5,20,10,1,4]
   *
   * => divide in half
   *
   * [2,5,20] [10,1,4]
   *
   * => divide in half (for simplicity, we'll proceed with the first array from now on, but the same
   * thing happens with the second one)
   *
   * [2] [5,20]
   *
   * At this point, 2 is a single element, so when it is passed as an argument to the recursive mergeSort function,
   * the if(arr.length <= 1) return arr condition will be triggered, and the 2 will be returned!
   * The other array continues to be divided!
   * [5] // length 1 => if(arr.length <= 1) is triggered and returns arr
   * [20] // length 1 => if(arr.length <= 1) is triggered and returns arr
   * When all arrays have been returned, the process occurs.
   */

  const sortedSubArrays = sort(
    mergeSort(arr.slice(0, half)),
    mergeSort(arr.slice(half, arr.length))
  );
  // console.log(sortedSubArrays);
  return sortedSubArrays;
};

const sort = function (arr1, arr2) {
  const merge = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || j >= arr2.length) {
      // console.log(`pusho ${arr1[i]}`);
      merge.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j] || i >= arr1.length) {
      // console.log(`pusho ${arr2[j]}`);
      merge.push(arr2[j]);
      j++;
    }
  }
  return merge;
};

console.time("timer1");
res = mergeSort([
  416, 782, 259, 564, 633, 938, 798, 498, 694, 62, 937, 681, 28, 830, 480, 176,
]);
console.timeEnd("timer1");
console.log(res);
