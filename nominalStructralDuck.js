// NOMINAL TYPE //

// In nominal typing system the compatibility of types is determined by explicit or names//
//Typea are considered equal if and only if they have same name or are explicitly declared as compatible //
//This means that even if two objects have the same structure, they are not considered of the same type unless they share the same explicit type name.
//JavaScript, in general, is not nominally typed. However, it does have some nominal typing features,
//such as the instanceof operator, which checks if an object is an instance of a particular class.//

// constructor function creation for  creating a Dog //
function Dog(name) {
  this.name = name;
}

// Constructor function for creating a cat //
function Cat(name) {
  this.name = name;
}

// Instsance of Dog and Cat //

const myDog = new Dog("buddy");

const myCat = new Cat("whiskers");

console.log(myDog instanceof Dog);
console.log(myCat instanceof Cat);

//STRUCTURAL TYPE //

const person = { name: "jhon", age: 30 };
const employee = { name: "Alice", age: 56, jobtitle: "developer" };

//  person = employee;

console.log(employee);

//DUCK TYPING//

const jhon = { name: "jhon", age: 90 };
const alice = { name: "alice", accupation: "Engneer" };

function greet(person) {
  console.log(`Hello, ${person.name}`);
}
// console.log(greet(jhon, "sdss"));
// console.log(greet(alice));
