let numbers = [1, 1, 2, 3, 4, 4, 45, 5, 5, 5];

// function findRepeatedNumbers(arr) {
//   let repeatedNumbers = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j] && !repeatedNumbers.includes(arr[i])) {
//         repeatedNumbers.push(arr[i]);
//       }
//     }
//   }
//   return repeatedNumbers;
// }

// let result = findRepeatedNumbers(numbers);
// console.log("Repeated numbers in the array:", result);

// let result = findRepeatedNumbers(numbers);
// console.log("Repeated numbers in the array:", result);

function repeat(arr) {
  let repeated = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && !repeated.includes(arr[i])) {
        repeated.push(arr[i]);
      }
    }
  }
  return repeated;
}


let result = repeat(numbers);
console.log(result);


(function)