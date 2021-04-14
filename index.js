// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your Project",
    name: "description",
  },
  {
    type: "input",
    message: "How to Install",
    name: "install",
  },
  {
    type: "input",
    message: "How to use",
    name: "usage",
  },
  {
    type: "input",
    message: "How to contribute",
    name: "contribution",
  }, {
    type: "input",
    message: "How to test",
    name: "test",
  },
  {
    type: "input",
    message: "Choose a GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "what is your email",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    //use inquirer 
}

// Function call to initialize app
init();
