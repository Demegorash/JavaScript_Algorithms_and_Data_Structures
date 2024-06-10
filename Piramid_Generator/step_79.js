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
Step 79
Now that you have practiced working with if...else if...else statements, you can remove them from your code.

Once you complete that, use let to declare a continueLoop variable and assign it the boolean false. Then use let to declare a done variable and assign it the value 0.

if ("") {
  console.log("Condition is true");
} else if (5 < 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
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

let continueLoop = false;
let done = 0;

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);