/*
let character = 'Hello';
let count = 8;

Step 23
A method in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the .log() method, which is part of the console object.

Arrays have their own methods, and the first you will explore is the .push() method. This allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:

array.push(12);
Use .push() to add the string "freeCodeCamp" to the end of your rows array. Add this code before your console.log so you can see the change you made to your array.

let rows = ["Naomi", "Quincy", "CamperChan"];

console.log(rows);
*/

// Resolution
/*
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

rows.push("freeCodeCamp");

console.log(rows);

/*
UPDATED 06/12/2024

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

Step 23
In the last few steps, you learned all about working with arrays. Take a moment to review what you have learned.

Start by declaring a cities variable and initializing it as an array of the strings "London", "New York", and "Mumbai". Then log that variable to the console.

After logging, change the last element of cities to the string "Mexico City", then log the cities variable again.

When done correctly, you should see this output in the console.

[ "London", "New York", "Mumbai" ]
[ "London", "New York", "Mexico City" ]

console.log(rows);
*/

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let cities = ["London", "New York", "Mumbai"];

cities[cities.length - 1] = "Mexico City";

console.log(rows);
console.log(cities);
console.log(cities);