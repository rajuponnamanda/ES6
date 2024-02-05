// A closure allows a function to access variables from its outer (enclosing) scope
// even after that scope has finished executing.

function outerFunction() {
  let outerVariable = "im from outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
let clouserFunction = outerFunction();
clouserFunction();
