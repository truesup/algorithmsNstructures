// Линейный - сложность O(n)

const randomArray = [1, 8, 4, 6, 7, 9, 2, 10, 3, 5];

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return `Element "${item}" found, its index is "${i}"`;
    }
  }

  return `Element "${item}" not found`;
}

console.log(linearSearch(randomArray, 2));
