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

  const top = arr.sort((a, b) => b - a)[0];

  console.log(top);
  return top;
}

mostCalories(input);
// Answer: 74711

// Comments:

// Struggle:
// Forgot that reduce method only returns back a number and not an array so i spent a while trying to figure out how to turn the answer back into an array.
// figured i'd just push it into an empty array and that worked

// What did i learn:
// refamiliarising myself with the reduce and sort methods
// had a bit of trouble converting the text file into something i knew how to use because the text file had double line spacing that i didn't realise
// Also remembered that i saw someone else access the indexes in an array by using the square bracket notation directly after a method so tried it here and it worked.
