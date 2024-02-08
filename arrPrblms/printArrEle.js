// First way //

let a = [10, 13, 132, 14, 144];
for (let i = 0; i < a.length; i++) {
  console.log(i + ":" + a[i]);
}

// Another Way //

let person = new Array();

person[0] = "Raju Ponnamanda";
person[1] = "shivani";
person[2] = "Revanth";

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
  //   console.log(person[2]);
}

// Other Way //

let cities = ["goa", "pune", "baali", "delhi"];
for (let a in cities) {
  console.log(cities[a]);
}

let country = ["india", "america", "uk"];
country.forEach(function (country, index) {
  console.log(country);
});
