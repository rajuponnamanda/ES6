// let numbers = [1, 1, 2, 3, 4, 4, 45, 5, 5, 5];

// function findRepeatedNumbers(arr) {
//     let repeatedNumbers = {};
//     let result = [];

//     arr.forEach(num => {
//         if (repeatedNumbers[num]) {
//             result.push(num);
//         } else {
//             repeatedNumbers[num] = true;
//         }
//     });

//     console.log("Repeated numbers in the array:", result);
// }

// findRepeatedNumbers(numbers);

let numbers = [11, 2, 11, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8];

function findingRepeatednum(arr) {
  let repeatedNumbers = {};
  let result = [];
  arr.forEach((num) => {
    if (repeatedNumbers[num]) {
      result.push(num);
    } else {
      repeatedNumbers[num] = true;
    }
  });
console.log("Repeated NUmbers :" ,result)

}

findingRepeatednum(numbers);