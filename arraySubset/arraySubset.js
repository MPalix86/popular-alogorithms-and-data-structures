'use strict';

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[Math.floor(array.length / 2)];
  const left = [];
  const equal = [];
  const right = [];

  for (const element of array) {
    if (element < pivot) {
      left.push(element);
    } else if (element === pivot) {
      equal.push(element);
    } else {
      right.push(element);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

function subsetA(arr) {
  let arrA = [];
  const lastIndex = arr.length - 1;

  arr = quickSort(arr);

  let aSum = 0;
  for (let i = lastIndex; i >= 0; i--) {
    let bSum = 0;
    aSum += arr[i];
    bSum = arr.slice(0, i).reduce((acc, curr) => (acc += curr), bSum);
    // console.log(`somma arrB:  ${bSum}, somma arrA : ${aSum}`);
    if (aSum > bSum) {
      const extractionIndex = -(lastIndex - (i - 1));
      arrA = arr.slice(extractionIndex);

      // console.log('i : ', i);
      // console.log('arrA : ', arrA);
      // console.log('arrB : ', arrB);
      break;
    }
  }
  return arrA;
}

// /**
//  * this functuin assumes that array is sorted
//  */
// const getDuplicates = function (arrA, arrB) {
//   const arrAcopy = [...arrA];
//   const arrBcopy = [...arrB];

//   for (let j = 0; j < arrB.length; j++) {
//     if (arrA[0] === arrB[j]) {
//       arrAcopy.push(arrB[j]);
//       arrBcopy.splice(j, 1);
//     }
//   }

//   return [arrAcopy, arrBcopy];
// };

let [arrA, arrB] = subsetA([1, 2, 2, 3, 5, 6, 8, 8, 9, 45, 19, 10, 19]);

console.log(arrA, arrB);
