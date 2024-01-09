// Variables are containers for storing information.
//  Creating a variable in JavaScript is called "declaring" a variable: var carName;
//   After the declaration, the variable is empty (it has no value).

var number = 4;
console.log(number);
// let number = 44;
// console.log(number);

// es6 = ecma Script 6//
//diffrence b/w const and var and le//

var name = "raju";
var b = 25;
var c = null;
var d = undefined;

//blocke scoped variable//

{
  let b = "this";
  console.log(b);
}
console.log(b);
