// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your Project?",
    name: "description",
  },
  {
    type: "list",
    message: "Choose your License?",
    name: "license",
    choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3"],
  },
  {
    type: "input",
    message: "How to Install?",
    name: "install",
  },
  {
    type: "input",
    message: "How to use?",
    name: "usage",
  },
  {
    type: "input",
    message: "How to contribute?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How to test?",
    name: "test",
  },
  {
    type: "input",
    message: "Choose a GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "what is your email?",
    name: "email",
  },
];

//use inquirer
inquirer.prompt(questions).then((answers) => {
  fs.writeFileSync(
    path.join(process.cwd(), "ReadMe.md"),
    generateMarkdown(answers)
  );
});
