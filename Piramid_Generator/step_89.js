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
Step 89
Your pyramid generator is still working. However, it could be possible to end up with an infinite loop again.

Because you are only checking if done is not equal to count, if done were to be larger than count your loop would go on forever.

Update your loop's condition to check if done is less than or equal to count.

let done = 0;

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
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
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
*/

let done = 0;

while (done <= count) {
  done++;
  rows.push(padRow(done, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);