// Выборка - сложность O(n^2)

const randomArray = [0, 3, 2, 4, 5, 7, 6, 8, 6, 9, 10, -1, 3, 5, -10, 3, 32];

function selectedSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

console.log(selectedSort(randomArray));
