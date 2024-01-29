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
