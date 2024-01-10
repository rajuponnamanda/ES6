// IMMEDIATLY INVOKE FUNCTION EXPRESSION //

var counter = 10; // global variable
counter++; // ends here

function increase() {
  counter = counter + 1;
}
increase();
console.log(increase);

//invoking

(function () {
  var counter = 10;
  counter++;
})(); // <-- invoking here -->
