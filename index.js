#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
console.log(answer);
//conditional statement//
if (answer.operator === "ADDITION") {
    console.log("your value is:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log("your value is:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log("your value is:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log("your value is:", answer.firstNumber / answer.secondNumber);
}
;
