// with the help of for loop //

const arrList = ["hello", "my", "name"];
const myObj = {};
for (i = 0; i < arrList.length; i++) {
  myObj[i] = arrList[i];
}
console.log(myObj);

// using Spread Operater //

let arrList1 = ["hello", "my", "name"];
let object = { ...arrList1 };

console.log(object);

// convert the arrays in arr  in to object //

let arr1 = [
  ["id", "1"],
  ["name", "Test User"],
  ["age", "25"],
  ["profession", "Developer"],
];
let object3 = {};

// by using Object.fromEntries //

let resultObject = Object.fromEntries(arr1);
console.log(resultObject);

// by using for loop //

for (i = 0; i < arr1.length; i++) {
  let [key, value] = arr1[i];
  object3[key] = value;
}
console.log(object3);
