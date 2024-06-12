import fs from "fs";

let input = fs.readFileSync("./gameInput.txt", "utf-8").split("\n");

function powerSets(input) {
  let total = 0;

  for (let i = 0; i < input.length; i++) {
    const gameString = input[i];
    let [gameId, gameData] = gameString.split(": ");

    let globalCubeCounts = {
      red: 0,
      green: 0,
      blue: 0,
    };

    for (let game of gameData.split("; ")) {
      let cubeCounts = {
        red: 0,
        green: 0,
        blue: 0,
      };

      for (let cube of game.split(", ")) {
        let [count, colour] = cube.split(" ");
        cubeCounts[colour] += Number(count);

        for (let key of Object.keys(cubeCounts)) {
          if (cubeCounts[key] > globalCubeCounts[key]) {
            globalCubeCounts[key] = cubeCounts[key];
          }
        }
      }
    }
    total +=
      globalCubeCounts.red * globalCubeCounts.blue * globalCubeCounts.green;
  }
  console.log(total);
  return total;
}

powerSets(input);
// Answer: 67335

// Comments:
// My idea was there, however, i was stuck trying to assign cubeCounts[colour] directly to Number(count) all in one go without having a global count to keep as a comparison.
// This meant that the count was always changing and not being kept correctly.
// I tried summing the total using *= globalCubeCounts[key], however, that would give me 0 because i initialised it to 0, otherwise it gave me an exponentially big number
// because *= would keep multiplying the number since it was in the for loop

// Struggle:
//understanding which individual part of the loop was doing what, the loops got quite nested so it is a little confusing keeping track

// What did i learn:
// I coudln't just reassign a cubeCount directly I need a global count to keep track of the full set games because the local cube count will only keep track of the individual games within a whole string game
// += and *= are very different so you cannot use *= to do the final total calculation
