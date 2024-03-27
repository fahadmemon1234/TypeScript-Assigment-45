#!/usr/bin/env node

import inquirer from "inquirer";

// const randomNumber = 13;

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number 1 to 6: ",
  },
]);

if (answers.userGuessedNumber == randomNumber) {
  console.log("Congratulaion! You guessed right now.");
} else {
  console.log("You guessed wrong number.");
}
