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

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/
/*
Step 101
Again, push the result of calling padRow with your i and count variables to your rows array.

Open up the console to see the upside-down pyramid.

for (let i = count; i > 0; i = i - 1) {

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

// TODO: use a different type of loop

/*
or (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
*/

/*
while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}
*/

for (let i = count; i > 0; i = i - 1) {
    rows.push(padRow(i, count));
    console.log(padRow);
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

