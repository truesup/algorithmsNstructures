// Пузырьковая - сложность O(n^2)

const randomArray = [0, 3, 2, 4, 5, 7, 6, 8, 6, 9, 10, -1, 3, 5, -10, 3, 32];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(randomArray));
