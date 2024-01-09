// SCOPES IN JS //

//Scoper are 4 types in java script there are //
// 1. Global scopes
// 2. Functional scopes//
// 3. Block Scopes
// 4. Local Scopes

// GLOBAL SCOPES //

// 1. Variables and functions declared outside of any function or block have global scope.
// 2. Global variables are accessible from any part of the code, including within functions and blocks.
// 3. When a variable is declared without the var, let, or const keywords, it becomes a global variable.

//Example:-

var globalVariable = "I am global";

function globalFunction() {
  console.log(globalVariable);
}

globalFunction();

// FUNCTIONAL SCOPES //

// 1. Variables declared with "var" inside a function have function scope.
// 2. these variables are accessible within entire function, but not outside of it .//

//Example:-

function functionScopeExample() {
  var localVar = "im function-scoped";

  console.log(localVar);

  if (true) {
    var innerVar = "im also function-scopes";
  }
  console.log(innerVar);
}
functionScopeExample();

//BLOCK SCOPES //

// 1. Variables declared with 'let' and 'const' inside a block (e.g., if, for, while) have block scope.
// 2. Block-scoped variables are only accessible within the block in which they are defined.

//Eamaple :-

if (true) {
  let blockVar = "im am block-scoped";
  console.log(blockVar);
}

//LOCAL SCOPES //

// 1. Local scope refers to the inner scopes created by functions or block statements.
// 2. Variables declared within a function or block are local to that function or block and are not accessible outside of it.
