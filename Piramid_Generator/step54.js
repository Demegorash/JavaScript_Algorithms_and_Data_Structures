/*
const character = "#";
const count = 8;
const rows = [];

Step 54
There is a bit of a problem, here. Your test declaration is currently after your return statement. An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your function code. This means that any code after a return statement will not run.

Move your test initialization to the line above your return statement.

function padRow(name) {
  
  return character + name;
  const test = "Testing";
}

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
*/
/*
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
    const test = "Testing";
    return character + name;
}

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

/*
UPDATED 06/12/2024

const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}

Step 54
Before moving on, take a moment to review how functions work.

Declare a function named addTwoNumbers. This function should take two arguments and return the sum of those two arguments.

Then declare a sum variable and assign it the value of calling your addTwoNumbers function with 5 and 10 as the arguments. Log the sum variable to the console.

const call = padRow("CamperChan");
console.log(call);


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
*/

const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum);

const call = padRow("CamperChan");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);