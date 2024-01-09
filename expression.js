// Expression //

// In JavaScript, an expression is a piece of code that produces a value.
// It can be a simple value like a number or string,
// a more complex structure like an object or an array,
// or a combination of values and operators that results in a new value.
// Expressions are an essential part of
// JavaScript as they form the building blocks for creating more complex logic and functionality.

//Example:-

// 1. LITERALS

//simple, fixed values are known as literals

42; //Numeric literal
("hello"); // String literal
true; // Boolean literal
null; //Null literal

// 2. VARIABLES

// Accessing the value stored in a varable is also an expression.

var x = 10;
x; // Accessing the value stored in the variable x

// 3. ARTHEMETIC EXPRESSIONS:

// Using mathematical operators to perform calculations.

2 + 3; // Addition

5 * 3; // Multiplication

x / 3; // Division where x is a variable

// 4. LOGICAL EXPRESSIONS

// Combining boolean values using logical operators

true && false; //  Logical AND
true || false; //  Logical OR
!true; //  Logical NOT

//   5. FUNCTION CALL EXPRESSION
// Invoking a function and using its return value

function add(a, b) {
  return a + b;
}

add(3, 4)[ //calling the add function add using its return value
  //  6. OBJECT AND ARRAY LITERALS:

  // Creating objects and arrays using literals.

  // {name:'jhon',age: 34}   // Object literal

  (1, 2, 3, 4, 5, 6)
]; // Array literal

// 7. CONDITIONAL (TERNARY) OPERATOR

// Creating conditional expression

var age = 20;
var isAdult = age >= 18 ? "yes" : "no";

// 8. TEMPLATE LITERALS (ES6 and LATER )
// Cating string with embedded expression

var myName = "alice";
var greeting = `Hello , ${myName}!`;
