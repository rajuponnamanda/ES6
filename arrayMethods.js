// PUSH for adding elements in the array //

let arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log(arr);

// POP for removing the last element in the array //

let array = [34, 56, 45, 46, 67];
array.pop();
console.log(array);

//  SHIFT  for removing the first value in the array //

let classes = [2, 3, 4, 5, 6, 7];

classes.shift();
console.log(classes);

//SPLICE  fror removing a elements based on index position //

let students = [1, 2, 3, 4, 5, 6, 7, 8, 90];

let index = students.indexOf(90);

students.splice(index, 1);
console.log(students);

// isArray helps to find array or not//

var data = [1, 1, 2, 3, 4, 4];

console.log(Array.isArray(data));

// Mapping it is helps to every element in the array//

var data = [100, 110, 12, 130, 141, 151];

data.map(function (element) {
  console.log(element);
});

// mapping returning  it is  returing the element sum with the 100//

var data = [101, 102, 103, 104, 105, 106, 107];

let outPut = data.map(function (element) {
  return element + 100;
});
console.log(outPut);

// Filter  it is filter the elements in the array grater then 1//

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

let input = data.filter(function (element) {
  return element > 1;
});
console.log(input);

// for Each //

var data = [1, 11, 111, 1111, 22, 33, 44];

data.forEach(function (element) {
  console.log(element);
});

// Every //

var data = [11, 33, 20, 34, 54, 565, 100];

var out = data.every(function (element) {
  return element > 10;
});
console.log(out);

// Some //
var data = [1, 3, 4, 5, 6, 77];

var h = data.some(function (element) {
  return element > 100;
});
console.log(h);

// IndexOf to finding the  postion of index value//

var data = [1, 2, 3, 4, 5];

console.log(data.indexOf(2));

// lastIndexOf to finding the  postion of last index value //

var data = [1, 2, 3, 4, 4];

console.log(data.lastIndexOf(2));
