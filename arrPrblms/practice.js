// Shift //

var arra = [1, 2, 1, 3, 4, 5];

console.log(arra.shift());

console.log(arra);

// unShift //

var unsh = [1, 2, 31, 43];
console.log(unsh.unshift(21, 90));
console.log(unsh);

// Pop//

let po = [3, 2, 4, 5, 6, 7];

let result = po.pop();
console.log(result);
console.log(po);

// Push //

let pu = [1, 2, 4, 5, 6, 7, 8];

pus = pu.push(133);
console.log(pu);

// Includes //

var inc = [12, 2, 34, 5, 56];
console.log(inc.includes(30)); // true//
console.log(inc.includes(12)); // false //

// Jion //

var jo = [1, 3, 4, 4, 5, 6, 7];
console.log(jo.join("-")); // converting the array to string //

// Reverse //

var rev = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(rev.reverse());

// Concat //

var con = [12, 3, 45, 6, 7];
console.log(con.concat(32, 45));

// Every //

var everr = [21, 32, 43, 56, 564];

let ever = everr.every(function (value, inex) {
  return value;
});
console.log(ever);

// Some //

var somee = [123, 1234, 122233, 232];

let someee = somee.some(function (value, index) {
  return value > 1234;
});
console.log(someee);

// Filter //

var filt = [121, 122, 1223, 4221, 2, 1];

let filte = filt.filter(function (value) {
  return value > 200;
});
console.log(filte);

// Slice //

var sli = [1, 2, 3, 33, 4, 44];

console.log(sli.slice(0, 4));

// Splice //

var spl = [12, 13, 14, 15, 16, 17];

console.log(spl.splice(1, 0, 100, 121, 131, 141));
console.log(spl);

// Map //

var ma = [109, 108, 1098];

var resul = ma.map(function (value, index) {
  return value * 5;
});
console.log(resul);

// let area = [];
// let are;
// for (let i = 0; i < ma.length; i++) {
//   are = ma[i] * 5;
//   area.push(are);
// }
// console.log(area);
