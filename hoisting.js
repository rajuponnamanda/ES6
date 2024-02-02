//" Hoisting is a behavior in javascript where variable and function declarations are
// moved to top of their containing scope during the completion phase.
// This means that you can variables and functions in your code even
// before they are declared. "//

const getName = () => {
  console.log("Hrkwdn");
};
getName();

greet();
function greet() {
  console.log("Good mornig");
}
console.log(a);
var a = 9;
console.log(a);
