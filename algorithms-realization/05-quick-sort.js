// Быстрая сортировка (один из самых эффективных алгоритмов) - сложность O(log2n*n)

const randomArray = [0, 3, 2, 4, 5, 7, 6, 8, 6, 9, 10, -1, 3, 5, -10, 3, 32];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(randomArray));
