var numbers = [1, 2, 3, 4, 5];
let leng = numbers.length;
let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
  totalSum += numbers[i];
}
console.log(totalSum);
//avrg //
let avg = totalSum / leng;
console.log("Average  " + avg);

// ES6 using //

var numberss = [1, 2, 3, 4, 2, 34];

function myFunc(total, num) {
  return total + num;
}
console.log(numberss.reduce(myFunc));
