// Бинарный - сложность O(log2n)

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] === item) {
      found = true;
      position = middle;
      return `Element "${item}" found, its index is "${position}"`;
    }

    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return `Position "${-1}", element "${item}" not found`;
}

console.log(binarySearch(sortedArray, 6));
