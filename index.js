const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "badge",
        message: "Provide your badge link"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide Installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide the project usage"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who else contributed to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "Provide project tests"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Proved your E-mail Address"
    },
// Do 9 more Read Me questions for this
// WHEN I enter a description, installation instructions, 
// usage information, contribution guidelines, and test instructions
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(JSON.stringify(data, null, ""));
        writeToFile("./utils/README.md", data);
    });
}

// function call to initialize program
init();
