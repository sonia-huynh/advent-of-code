import fs from "fs";

// const input = fs.readFileSync("./test.txt", "utf-8").split("\n");
const input = fs.readFileSync("./input.txt", "utf-8").split("\n");

function totalScore(input) {
  const stratMap = {
    A: "rock",
    B: "paper",
    C: "scissors",
    X: "lose",
    Y: "draw",
    Z: "win",
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
    if (combo[1] == "draw") {
      const draw = 3 + moves[combo[0]];
      score += draw;
    }
    //win
    else if (combo[1] == "win") {
      if (combo[0] == "rock") {
        const win = 6 + moves.paper;
        score += win;
      } else if (combo[0] == "scissors") {
        const win = 6 + moves.rock;
        score += win;
      } else if (combo[0] == "paper") {
        const win = 6 + moves.scissors;
        score += win;
      }
    }
    //lose
    else if (combo[1] == "lose") {
      if (combo[0] == "rock") {
        const lose = moves.scissors;
        score += lose;
      } else if (combo[0] == "scissors") {
        const lose = moves.paper;
        score += lose;
      } else if (combo[0] == "paper") {
        const lose = moves.rock;
        score += lose;
      }
    }
  }
  //   console.log(combinations);
  console.log(score);
  return score;
}

totalScore(input);
// Answer: 15508

// Comments:

// Struggle:
// Not particularly a struggle, but i do wonder whether my code could be more dynamic rather than manually writing out the winning and losing moves that the player has to use

// What did i learn:
// practiced nested if else statements
