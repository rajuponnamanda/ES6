let employee = [
  {
    id: 1,
    name: "shivani",
    salary: 25000,
  },
  {
    id: 2,
    name: "Def",
    salary: 15000,
  },
  {
    id: 3,
    name: "Abc",
    salary: 65000,
  },
  {
    id: 4,
    name: "Abc",
    salary: 75000,
  },
];
let ab = employee.filter((employee) => employee.salary >= 25000);
console.log(
  ab.map((employee) => employee.salary).reduce((prev, next) => prev + next)
);
console.log(ab);
