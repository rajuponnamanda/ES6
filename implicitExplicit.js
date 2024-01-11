// IMPLICT CONVERSATION //

//Implicit Type conversion - Automatic conversion //

// ex:- var someNumber -Number("5.99") //

let mumber = 6;

let string = "5.99";

let result = mumber + string;
console.log("main Result" + result);

let bool = true;

let mybool = bool + 400;
console.log("bool sum", mybool);

// EXPLICIT TYPE//

// Explicit type conversion - initiated by code  //
//EX;//

let strNumber = "xasa";
let myNum = Number(strNumber);
console.log("myNumber ", strNumber, myNum);

let mySecnm = 45;
let boolValue = Boolean(mySecnm);
console.log(boolValue);

let thirdNumber = 1034;
let stringResult = String(thirdNumber);
console.log(stringResult);

let decimalString = "54.99";
let floatResult = parseFloat(decimalString);
console.log(floatResult);
