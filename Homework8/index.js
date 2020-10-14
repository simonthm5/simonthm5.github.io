// array of questions for user
var inquirer = require("inquirer");
var fs = require('fs');

function questions() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is title of this project?"
    },
    {
      type: "input",
      name: "author",
      message: "Who is the author if this project?"
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project"
    },
    {
      type: "input",
      name: "install",
      message: "Please enter a installation instructions"
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter instructions for usage"
    },
    {
      type: "input",
      name: "license",
      message: "Please list any license information"
    },
    {
      type: "input",
      name: "contribution",
      message: "Please list any contributors to this project"
    },
    {
      type: "input",
      name: "test",
      message: "Please list any testing information"
    }]).then(answers => {
      var fileName = answers.title;
      fs.writeFile(fileName + ".md", "# Project Title:  " + JSON.parse(JSON.stringify(answers.title)) + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        } 
      });
      fs.appendFile(fileName + ".md", "### Author:" + JSON.parse(JSON.stringify(answers.author)) + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "### Project Description: " + "\n" + "```" + "\n" + JSON.parse(JSON.stringify(answers.description)) + "\n" + "```" + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "Table of Contents:" + "\n" + "Author" + "\n" + "Project Description" + "\n" + "Testing Information" + "\n" + "Usage Information" + "\n" + "Installation Information" + "\n" + "License" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "### Installation Instructions:" + "\n" + "```" + "\n" + JSON.parse(JSON.stringify(answers.install)) + "\n" + "```" + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "### Usage Instructions:" + "\n" + "```" + "\n" + JSON.parse(JSON.stringify(answers.usage)) + "\n" + "```" + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "### License Information:" + "\n" + "```" + "\n" + JSON.parse(JSON.stringify(answers.license))+ "\n" + "```" + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "### Additional Contributors:" + "\n" + "```" + "\n" + JSON.parse(JSON.stringify(answers.contribution)) + "\n" + "```" + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "### Testing Information:" + "\n" + "```" + "\n" + JSON.parse(JSON.stringify(answers.test)) + "\n" + "```" + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      fs.appendFile(fileName + ".md", "Badge Information:" + "\n" + "[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)" + "\n" + "\n", function (err) {
        if (err) {
          return console.log(err);
        }
      });
      console.log("README file created!");
    })};
   

  // function to write README file
  function writeToFile(fileName, data) {
  };

  // function to initialize program
  function init() {
    questions()
    writeToFile()
    //writeToFile()
  };

  // function call to initialize program
  init()
