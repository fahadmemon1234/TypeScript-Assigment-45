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
    if (operationAns.operation === "Withdraw") {
        let AmountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount: ",
                type: "number",
            },
        ]);
        if (myBalance < AmountAns.amount) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= AmountAns.amount;
            console.log(`Your remainingg balance is: ${myBalance.toLocaleString()}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your balance is: ${myBalance.toLocaleString()}`);
    }
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
else {
    console.log("Incorrect pin code!");
}
