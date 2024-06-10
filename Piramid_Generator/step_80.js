/*
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/
/*
Step 80
A while loop will run over and over again until the condition specified is no longer true. It has the following syntax:

while (condition) {
  logic;
}

Use that syntax to declare a while loop with continueLoop as the condition. The body should be empty.

let continueLoop = false;
let done = 0;

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
*/

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop

/*
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
*/

let continueLoop = false;
let done = 0;

while(continueLoop) {

}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);