// Getting even numbers devde by 2 //

var myArray = [1, 2, 3, 4, 5, 6, 7];

function evenNumbwers(array) {
  let arra = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      arra.push(array[i]);
    }
  }
  return arra;
}

console.log(evenNumbwers(myArray));
