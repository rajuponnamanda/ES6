// sgtringify is used to convert the object in to json file //

var data = {
  name: "Raju Ponnamanda",
  age: 25,
  role: "Developer",
  number: 9959444532,
};

var json = JSON.stringify(data);
console.log(json);
