import fs from "fs";

// const input = fs.readFileSync("./test.txt", "utf-8").split("\n");
const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

function totalScore(input) {
  const stratMap = {
    A: "rock",
    B: "paper",
    C: "scissors",
    X: "rock",
    Y: "paper",
    Z: "scissors",
  };

  const moves = {
    rock: 1,
    paper: 2,
    scissors: 3,
  };

  let combinations = [];
  let score = 0;
  for (let letter of Object.keys(stratMap)) {
    input = input.map((combo) => combo.replaceAll(letter, stratMap[letter]));
  }
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    const comb = element.split(" ");
    combinations.push(comb);
  }

  for (let i = 0; i < input.length; i++) {
    const combo = combinations[i];

    // draw
    if (combo[0] == combo[1]) {
      const draw = 3 + moves[combo[1]];
      score += draw;
    }
    //win
    else if (
      (combo[0] == "rock" && combo[1] == "paper") ||
      (combo[0] == "scissors" && combo[1] == "rock") ||
      (combo[0] == "paper" && combo[1] == "scissors")
    ) {
      const win = 6 + moves[combo[1]];
      score += win;
    }
    //lose
    else {
      const lose = 0 + moves[combo[1]];
      score += lose;
    }
  }
  console.log(score);
  return score;
}

totalScore(input);
//Answer: 13268

// Comments:

// Struggle:
// Struggled a little bit with trying to figure out how to separate between the opponents turn and the player's turn so that i could map through the strat code with the player moves
// ended up using a for loop to access each individual player so that i could split it and keep them in an array

// What did i learn:
// practiced more of the += and also remembering to keep a global variable for score outisde of the loops
// practiced a new strategy (string replacement using mapping transformation) i learned in aoc 2023 where i map over array items and replace them with the object dictionary i created
// practiced how to dynamically access object key value pairs using bracket notation with moves[combo[1]]
