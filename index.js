#! /usr/bin/env node
// npm init command for creating the projects package.json file
//tsc --init for creating the type script file
// in line change target from es2016 to es2022 to
// change module to NodeNext inline 28
//uncomment line 30 and change value to nodenext
// add  "type": "module", in package.json file
//npm i inquirer for installig inquirer
//#! /usr/bin/env node]add this in index.ts file
//"bin":"index.js",] add this in package.json file
// run npm login
// run npm publish
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select the operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(`your value is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`your value is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`your value is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Division") {
    console.log(`your value is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("Please select valid operation");
}
