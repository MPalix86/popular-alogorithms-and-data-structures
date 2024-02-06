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
   * Questo potrebbe confondere ma è importante notare che il return qui sotto avviene solo 1 volta
   * ovvero quando tutte le altre merge sort ricorsive sono finite, questo perche ? perche succede
   * che tutte le merge sort ricorsive dopo la prima verranno sempre richiamate fin quando l'array non
   * diventa di un elemento, e a quel punto sara la condizione sopra a far ritornare la funzione, facendo
   * ritornare un solo numero alla volta !
   * ecco un esempio !
   *
   * input [2,5,20,10,1,4]
   *
   *  => dividiamo a meta
   *
   * [2,5,20] [10,1,4]
   *
   * =>  dividiamo a meta ( per semplicita da ora in avanti procedermo con il primo array, ma lastessa
   *      cosa succede con il secondo)
   *
   * [2] [5,20]
   *
   * a qeusto punto il 2 è di un elemento, quindi quando verra passato come argomento alla funzione
   * di mergeSort ricorsivaemnte si attivera il controlo if(arr.lenght <= 1) return arr
   * quindi il 2 viene ritornato !
   * l'altro array continua ad essere divisio !
   *
   * [5]  // lunghezza 1 => si attiva if(arr.lenght <= 1) return arr
   *
   * [20]  // lunghezza 1 => si attiva if(arr.lenght <= 1) return arr
   *
   * quando tutti gli array vengono ritornati avviene i
   */

  const sortedSubArrays = sort(mergeSort(arr.slice(0, half)), mergeSort(arr.slice(half, arr.length)));
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

console.time('timer1');
res = mergeSort([416, 782, 259, 564, 633, 938, 798, 498, 694, 62, 937, 681, 28, 830, 480, 176]);
console.timeEnd('timer1');
console.log(res);
