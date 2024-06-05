import fs from "fs";

let input = fs.readFileSync("./input.txt", "utf-8").split("\n");

// Part One:
function calibration(input) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const string = input[i];
    const single = string.split("");
    const check = single.filter((num) => isNaN(num) != true);

    if (check.length <= 1) {
      total += Number(check[0] + check[0]);
    } else {
      total += Number(check[0] + check[check.length - 1]);
    }
  }
  console.log(total);
  return total;
}
calibration(input);
// Answer: 55090

// One star achieved!
// Comments:
// Attempted this by myself with no help!

// Struggle:
// I put return in myif statements within the for loop and couldn't get the total.
// Asked chatGPT and found out that i cannot put return statements inside a for loop or else it will terminate the loop once the condition is satisfied

// What did i learn:
// Understanding how to use += and getting used to the .filter() method
