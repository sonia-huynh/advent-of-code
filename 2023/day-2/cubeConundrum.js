import fs from "fs";

let input = fs.readFileSync("./gameInput.txt", "utf-8").split("\n");

function sumId(input) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    let canGame = true;
    const gameString = input[i];
    let [gameId, gameData] = gameString.split(": ");

    for (let game of gameData.split("; ")) {
      let cubeCounts = {
        red: 12,
        green: 13,
        blue: 14,
      };

      for (let cube of game.split(", ")) {
        let [count, colour] = cube.split(" ");
        cubeCounts[colour] -= Number(count);

        for (let key of Object.keys(cubeCounts)) {
          if (cubeCounts[key] < 0) {
            canGame = false;
          }
        }
      }
    }
    if (canGame) {
      total += Number(gameId.split(" ")[1]);
    }
  }
  //   console.log(total);
  return total;
}

sumId(input);
// Answer: 2512

// Comments:
// Didn't have a full idea on how to try solve the problem. Only knew i had to have a total, set the cubeCounts
// Was unsure on how to decrease the count for the number AND the colour

// Struggle:
// forgetting that arrays can't be split, only strings can, so you have to use a loop!

// What did i learn:
// How to destructure an array that has been created from a string split
