
const chalk = require("chalk");
const boxen = require("boxen");


const cardData = {
  name: chalk.bold("      👋 Hello I am Ayush Vishwakarma\n  A Full Stack Developer\n DSA Enthusiast "),
  work: `${chalk.white("Full Stack Developer at ")} ${chalk.bold("DevTown")}`,
  github: chalk.gray("https://github.com/") + chalk.green("Ayush-Vish"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("ayush-vishwakarma1"),
  npx: chalk.red("npx") + " " + chalk.white("ayush-vish"),
  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

exports.Card = boxen(
  [
    `${cardData.name}`,
    ``,
    `${cardData.labelWork}  ${cardData.work}`,
    ``,
    `${cardData.labelGitHub}  ${cardData.A}`,
    `${cardData.labelLinkedIn}  ${cardData.linkedin}`,
    ``,
    `${cardData.labelCard}  ${cardData.npx}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);
