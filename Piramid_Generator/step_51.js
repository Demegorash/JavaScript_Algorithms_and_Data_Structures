/*
const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
}

Step 51
If you open your console again, you'll see that your padRow function is returning undefined, even though you defined a return value! This is because parameters need to be given a value when you call the function.

When you pass a value to a function call, that value is referred to as an argument. Here is an example of calling a demo function and passing "Naomi" as the argument for the name parameter.

function demo(name) {
  return name;
}
demo("Naomi");

Pass your own name as the argument for the name parameter in your padRow call. Remember that your name is a string, so you'll need to use quotes.

const call = padRow();

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

const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
  return name;
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