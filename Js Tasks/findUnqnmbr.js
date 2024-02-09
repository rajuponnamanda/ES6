
let array = [1, 2, 2, 3, 3, 4, 4, 5, 5];

function findUniqueNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let isUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && num === arr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      return num;
    }
  }
  return null;
}
console.log("Unique number:", findUniqueNumber(array));
