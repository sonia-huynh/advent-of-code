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

  arr.sort((a, b) => b - a);
  console.log(arr[0]);
  return arr[0];
}

mostCalories(input);
