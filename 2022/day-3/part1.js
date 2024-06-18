import fs from "fs";

const input = fs.readFileSync("./test.txt", "utf-8").split("\n");
// const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

function rucksackReorganization(input) {
  let total = 0;
  const same = [];

  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    const half = element.length / 2;

    //compartment one
    const compartOne = element.slice(0, half); //string
    const uniqueSetCompOne = new Set(compartOne);

    //compartment two
    const compartTwo = element.slice(half, element.length); //string
    const uniqueSetCompTwo = new Set(compartTwo);

    // find repeating letters
    for (let letter of uniqueSetCompOne) {
      if (uniqueSetCompTwo.has(letter)) {
        same.push(letter);
      }
    }

    // calculate sum of repeated letters
  }
  for (let i = 0; i < same.length; i++) {
    const item = same[i];

    for (let low of lower) {
      if (item === low) {
        const lowered = lower.indexOf(low) + 1;
        total += lowered;
      }
    }

    for (let high of upper) {
      if (item === high) {
        const upped = upper.indexOf(high) + 27; //+27 because uppercase starts from 27
        total += upped;
      }
    }
  }
  console.log(total);
  return total;
}

rucksackReorganization(input);
// Answer: 157
