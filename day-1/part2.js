import fs from "fs";

let input = fs.readFileSync("./input.txt", "utf-8").split("\n");

function part2(input) {
  const numMap = {
    one: "one1one",
    two: "two2two",
    three: "three3three",
    four: "four4four",
    five: "five5five",
    six: "six6six",
    seven: "seven7seven",
    eight: "eight8eight",
    nine: "nine9nine",
  };

  let total = 0;

  for (let i = 0; i < input.length; i++) {
    let string = input[i];

    for (let num of Object.keys(numMap)) {
      string = string.replaceAll(num, numMap[num]);
    }

    const single = string.split("");
    const check = single.filter((num) => isNaN(num) != true);
    total += Number(check[0] + check[check.length - 1]);
  }
  console.log(total);
  return total;
}
part2(input);

// Answer: 54845

// Another star achieved! (total: 2 stars)
// Struggled a lot with this one because i didn't know how to turn spelled out digits into numerical numbers AND count them as well.
// Struggle: Once again i wasn't careful of the return statement and i put it in the for loop which prevented me from getting the calculations showing
// however, I also didn't remember to reassign a variable i had to call it again
// What did I learn: Learnt how to map new items over old ones using replaceAll() and a for...loop
