import { log } from "console";
import fs from "fs";

const input = fs.readFileSync("./test.txt", "utf-8").split("\n");
// const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

// console.log(input);
function sumPriorities(input) {
  let total = 0;
  const same = [];

  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  for (let i = 0; i < input.length; i += 3) {
    const byThree = input.slice(i, i + 3); //returns three strings in an array

    //split the three strings into their own var
    const [stringOne, stringTwo, stringThree] = byThree;

    //create a unique letter set for all three strings
    const firstSet = new Set(stringOne);
    const secondSet = new Set(stringTwo);
    const thirdSet = new Set(stringThree);

    console.log(firstSet);
    //check each string for repeating letter
    for (let letter of firstSet) {
      if (secondSet.has(letter) && thirdSet.has(letter)) {
        //.has() is a method unique to Set it can be thought to be similar to .includes()
        same.push(letter);
      }
    }
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
  // console.log(total);
  return total;
}

sumPriorities(input);
// Answer: 2479
