//  Rest operator //

const array = (a, d, ...arr) => console.log(arr);
array(10, 20, 50, 60);


const person =(name,age,role,email,...obj)=> console.log(obj);
person('rsju', 25,'developer', 'rponnam@gmail.com')