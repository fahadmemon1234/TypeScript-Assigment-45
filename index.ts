#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;

let myPin = 3311;

const pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin: ",
    type: "number",
  },
]);

//   ------------------Correct Pin---------------------------

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select Option: ",
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);

  //   ------------------Withdraw---------------------------
  if (operationAns.operation === "Withdraw") {
    let AmountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Amount: ",
        type: "number",
      },
    ]);

    // ------------Insufficient Balance------------
    if (myBalance < AmountAns.amount) {
      console.log("Insufficient Balance");
    }
    // ------------Sufficient Balance------------
    else {
      myBalance -= AmountAns.amount;

      console.log(`Your remainingg balance is: ${myBalance.toLocaleString()}`);
    }
  }

  //   ------------------Check Balance---------------------------
  else if (operationAns.operation === "Check Balance") {
    console.log(`Your balance is: ${myBalance.toLocaleString()}`);
  }

  //   ------------------Fast Cash---------------------------
  else {
    let FastAns = await inquirer.prompt([
      {
        name: "fastAmount",
        message: "Please Select Amount: ",
        type: "list",
        choices: ["10000", "20000", "30000"],
      },
    ]);

    myBalance -= FastAns.fastAmount;

    console.log(`Your remainingg balance is: ${myBalance.toLocaleString()}`);
  }
}

//   ------------------Incorrect Pin---------------------------
else {
  console.log("Incorrect pin code!");
}
