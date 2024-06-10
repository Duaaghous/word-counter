#! /usr/bin/env node
import inquirer from "inquirer";//import here

const ans: {
    Sentence : string,

} = await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter your sentence to count the words",

    },
]);
const words = ans.Sentence.trim().split(" ")
//print the array of words to the console
// const array = 
console.log(words)
let w=words.length;
//print the  word count of the sentence of the console
console.log('your senternce word count is  : '+ w);



