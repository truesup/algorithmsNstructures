// Бинарный - сложность O(log2n)

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// через цикл
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

// console.log(binarySearch(sortedArray, 6));

// рекурсивный способ
function recursiveBinarySearch(arr, item, start, end) {
  let middle = Math.floor((start + end) / 2);

  if (item === arr[middle]) {
    return middle;
  }

  if (item < arr[middle]) {
    return recursiveBinarySearch(arr, item, 0, middle - 1);
  } else {
    return recursiveBinarySearch(arr, item, middle + 1, end);
  }
}

// console.log(recursiveBinarySearch(sortedArray, 6, 0, sortedArray.length));
