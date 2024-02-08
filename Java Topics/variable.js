//  VAR & LET & CONST //

// var
// declare variables any number of times
// you can assign new values to var to var variables

//Example:-

var userName = "rajuponnamanda";
var userName = "Jhon"; // over ride the value

// let
// you cannot re-declare the same variables again
// you can assign the value any number of times
// the variables defined using let are block levels

//Example:-

let userId = 10;
// let userId=29; // it throw a error //

// block level //
if (a < b) {
  let userId = 20;
  console.log(userId);
}

// const
// you have to initilize a value for const variables
// you cannot redeclare the same variables in the same scope block level
// redeclare butr inside a block
// you cannot assign a new value to const variable

//Example:-

const userCity = "NYC";

// const userCity ="bangalore"; its throw a error

// block level
if (a < b) {
  const userCity = "Bangalore";
  console.log(userCity);
}
console.log(userCity);
