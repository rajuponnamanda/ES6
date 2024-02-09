//for loop //

// for (let i = 0; i < 5; i++) {
//   console.log("hii", i);

//   for (let j = 0; j < 5; j++) {
//     console.log("ello", j);
//   }
// }

// lets try it in differant //

const names = ["Raja", "shivani", "Raju", "Revanth"];

for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}

//  Trying convert the arrays in array in to th object //

let arr1 = [
  ["id", "1"],
  ["name", "Test User"],
  ["age", "25"],
  ["profession", "Developer"],
];

let resultObj = {};

for (let i = 0; i < arr1.length; i++) {
  let [key, value] = arr1[i];
  resultObj[key] = value;
}
console.log(resultObj);

let singleArray = ["hello", "jokoj", "sjsjn"];

let result = {};

for (let i = 0; i < singleArray.length; i++) {
  result[i] = singleArray[i];
}
console.log(result);





// trying to convert object to array by using for loop /

let persion = {
  name: "raju",
  surName: "Ponnamanda",
};

let resultArray = [];

for (let key in persion) {
  if (persion.hasOwnProperty(key)) {
    resultArray.push([key, persion[key]]);
  }
}

console.log(resultArray, "hello");

let arrays = [
  ["id", "1"],
  ["name", "Raju Ponnamanda"],
  ["age", "27"],
  ["proffession", "Developer"],
];

let onjectsAr = {};
for (let i = 0; i < arrays.length; i++) {
  let [key, value] = arrays[i];
  onjectsAr[key] = value;
}
console.log(onjectsAr);
