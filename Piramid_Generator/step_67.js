/*
const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

Step 67
Because you are only increasing i by 1, you can use the increment operator ++. This operator increases the value of a variable by 1, updating the assignment for that variable. For example, test would become 8 here:

let test = 7;
test++;

for (let i = 0; i < count; i += 1) {

    rows.push(padRow(i + 1, count));
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

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i++) {

    rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);