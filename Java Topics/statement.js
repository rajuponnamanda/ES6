// STATEMENT

// In JavaScript, an expression is a piece of code that produces a value. It can be a simple value like a number or string,
// a more complex structure like an object or an array, or a combination of values and operators that results in a new value.
// Expressions are an essential part of JavaScript as they form the building blocks for creating more complex logic and functionality.

//Ex:-

// 1. VARIABLE DECLARATION

// Declaration variable using "var" "let" or "const"

var x;
let y = 10;
const PI = 3.42;

// 2. Assignment Statement

// Assigning a value to variable

x = 5;
y = y + 2;

// 3. Conditional Statement (if, else if, else)

// excuging diffrent blocks of code based on a condition

if (condition) {
} else if (anotherCondition) {
} else {
}

// 4. Loop Statement (for,while,do-while)

// Repeating a block of code multiple times

for (var i = 0; i < 5; i++) {}
while (condition) {}
do {} while (condition);

// 5. Function Declaration
// Define a function

function myFunction(parameter) {}

// 6. Return Statement
// returning a value from a fiunction

function add(a, b) {
  return a + b;
}

// 7. Break and conditinue Statements

// controlling the flow of loops

for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break; //exit the loop if i is 5
  }
  console.log(i);
}

for (var i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // skip the rest of the loop body and move to the next iteration if i is 5
  }
  console.log(i);
}

// 8. Switch Statement

// Selecting one of many code blocks to excute.

switch (value) {
  case 1:
    //code to be excuted if value is 1
    break;
  case 2:
    // code to be excute if value is 2
    break;
  case 3:
  default:
  // code to be excuted if value doesn't match any case
}
