import fs from "fs";

// let input = fs.readFileSync("./test.txt", "utf-8").split("\n\n");
let input = fs.readFileSync("./input.txt", "utf-8").split("\n\n");

function mostCalories(input) {
  const cal = input.map((elf) => {
    return elf.split("\n").map((oneCal) => Number(oneCal));
  });

  const arr = [];
  for (let elfCal of cal) {
    const sum = elfCal.reduce((a, b) => a + b, 0);
    arr.push(sum);
  }

  //part 2
  const topThree = arr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);

  console.log(topThree);

  return topThree;
}

mostCalories(input);
// Answer: 209481

// Comments:
// Knew how to solve it but decided to put it all in one line so it wasn't all spaced out with multiple variables.

// Struggle:

// What did i learn:
// practiced .slice()
