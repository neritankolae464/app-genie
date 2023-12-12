/* filename: complex_code.js */

// This code is a complex and elaborate implementation of the Merge Sort algorithm in JavaScript.
// It efficiently sorts an array of numbers in ascending order.

// Merge Sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Merge helper function
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test case
const numbers = [8, 5, 2, 9, 5, 6, 3];
const sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers);

// Output: [2, 3, 5, 5, 6, 8, 9]