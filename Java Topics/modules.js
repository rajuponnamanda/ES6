//MODULES //

const hello = () => {
  console.log("hello Raju   ");
};
const greetings = (wishes) => {
  console.log("Hello" + wishes);
};
module.exports = (hello, greetings);

// ES6 //
const increase = () => {
  console.log("calculation increasing");
};

const decrease = () => {
  console.log("calculation decreasing");
};

export default (increase, decrease);
