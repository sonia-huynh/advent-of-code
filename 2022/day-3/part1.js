import fs from "fs";

// const input = fs.readFileSync("./test.txt", "utf-8").split("\n");
const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

// console.log(input);
function rucksackReorganization(input) {
  //   const compOne = [];
  //   const compTwo = [];
  let total = 0;
  const same = [];

  const lower = "abcdefghijklmnopqrstuvwxyz".split("");
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    const half = element.length / 2;

    const compartOne = element.slice(0, half); //string
    const singleLettersOne = compartOne.split("");
    // compOne.push(compartOne);
    const uniqueSetCompOne = [...new Set(singleLettersOne)]; // spread syntax used to convert 'Set' back to array

    const compartTwo = element.slice(half, element.length); //string
    // compTwo.push(compartTwo);
    const singleLettersTwo = compartTwo.split("");
    const uniqueSetCompTwo = [...new Set(singleLettersTwo)]; // spread syntax used to convert 'Set' back to array

    for (let i = 0; i < uniqueSetCompOne.length; i++) {
      const letter = uniqueSetCompOne[i];
      const repeat = uniqueSetCompTwo.filter((single) => single === letter)[0];

      if (repeat != undefined) {
        same.push(repeat);
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
        const upped = upper.indexOf(high) + 27;
        total += upped;
      }
    }
  }
  console.log(total);
}

rucksackReorganization(input);
