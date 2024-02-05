// WHAT IS JAVASCRIPT //

//Java script is single threaded, non blocking, asynchronous concurrent language.
// It has a call stack, an event loop and call back que + other api's
//
// CALL  STACK //

function greeting() {
  sayHi();

  function sayHi() {
    return "hi";
  }
}
greeting();
