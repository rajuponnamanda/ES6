//call stack which is a mechanism to keep track of the pfunction calls.//
// javascript engine uses a call stack to manage EXCUTION CONTEXT: the global
//excution context and function excution contexts.//

// it works v=based on the LIFO principle i.e, last-in-first-out//

// function ceo() {
//   console.log("im the ceo Of Ariqt International");
// }
// function cto() {
//   console.log("im the cto of Aritqt international");
// }
// function FrontendDeveloper() {
//   console.log("im the frontend Developer from Ariqt");
// }
// function BackendDeveloper() {
//   console.log("im backend Developer from Ariqt");
// }

var a = 10;
function add(a, b) {
  return b + c;
}
function multi(x, y) {
  return add(x, y) * 2;
}
console.log(multi(10, 20));
