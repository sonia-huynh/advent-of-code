import fs from "fs";

// const input = fs.readFileSync("./test.txt", "utf-8").split("\n");
const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

function campCleanup(input) {
  //check how many pairs include the other fully
  let count = 0;

  //loop through the input to creat pair one set and pair two set
  for (let pairs of input) {
    const [first, second] = pairs.split(",");
    const [firstStart, firstEnd] = first.split("-").map(Number);
    const [secondStart, secondEnd] = second.split("-").map(Number);

    //compare the start and end digits of each pair set and increase the count by 1 if it is true
    if (firstStart <= secondStart && firstEnd >= secondStart) {
      count++;
    } else if (secondStart <= firstStart && secondEnd >= firstStart) {
      count++;
    }
  }
  console.log(count);
}

campCleanup(input);
