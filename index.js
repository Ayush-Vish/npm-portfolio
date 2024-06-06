import inquirer from 'inquirer'; 
import chalk from 'chalk';
import fs from 'fs/promises';
import {Card} from './card.js';

import fs from 'fs/promises';

let data;
fs.readFile('./portfolio.json', 'utf8')
  .then(fileContent => {
    data = JSON.parse(fileContent);
    // rest of your code that uses data
  })
  .catch(err => console.error(err));

// add response color
const response = chalk.magenta;

const resumeOptions = {
  type: "list",
  name: "resumeOptions",
  message: "What do you want to know?",
  choices: [...Object.keys(data), "🔴 Exit"]
};

function showResume() {
  console.log(Card);
  handleResume();
}

function handleResume() {
  inquirer.prompt(resumeOptions).then(answer => {
    if (answer.resumeOptions == "Exit") return;

    const options = data[`${answer.resumeOptions}`]
    if (options) {
      if(answer.resumeOptions=="Projects")
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response(" " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
      else
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response("🔺 " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
    }

    //Handling Exit

    inquirer
    .prompt({
      type: "list",
      name: "exitBack",
      message: "Do You want to go back or exit?",
      choices: ["Back", "Exit"]
    }).then(choice => {
      if (choice.exitBack == "Back") {
        handleResume();
      } else {
        console.log("Bye Bye 🧏‍♂️🤫");
        return;
      }
    });
  }).catch(err => console.log('Oops,', err))
}

showResume();