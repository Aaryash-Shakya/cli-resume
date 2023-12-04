#! /usr/bin/env node

import figlet from "figlet";
import gradientString from "gradient-string";
import chalk from "chalk";
import inquirer from "inquirer";
import nanospinner from "nanospinner";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function downloadAnimation(downloadName) {
    const spinner = nanospinner.createSpinner(`Downloading ${downloadName}...`).start();
    await sleep(2000);
    spinner.success({ text: `${downloadName} Downloaded` });
}

async function welcome() {
    setFiglet("_Aaryash_\n_Shakya_\n");
    await sleep();
    console.log(chalk.greenBright("\n\nHI! I am Aaryash Shakya."));
    await sleep();
    console.log("I am a MERN Stack developer.");
    console.log("I am BSc. CSIT student at Sagarmatha College of Science and Technology.");
    console.log("My favorite programming tools are TypeScript, SCSS, and C++.");
    console.log("Feel free to connect with me on the following platforms.\n");
    console.log("LinkedIn: https://www.linkedin.com/in/aaryash-shakya/");
    console.log("Github: https://www.github.com/Aaryash-Shakya/");
}

async function question1() {
    let ans = await inquirer.prompt({
        name: "ans1",
        type: "input",
        message: "Would you like to know what MERN stands for? (y,n)",
        default() {
            return "y";
        },
    });
    ans = ans.ans1.toLowerCase();
    if (ans === "y" || ans === "yes") {
        console.log("");
        console.log(chalk.hex("#13aa52")("\tM  ->  MongoDB"));
        sleep();
        console.log(chalk.hex("#EFD81D")("\tE  ->  Express"));
        sleep();
        console.log(chalk.hex("#61DAFB")("\tR  ->  React"));
        sleep();
        console.log(chalk.hex("#6e9e42")("\tN  ->  Node.js"));
        console.log("");
        sleep(500);
    } else {
        console.log(chalk.bgRed("ok bye"));
    }
}

// async function displayIntroduction() {

// }

// Call the function to display the introduction
// module.exports = displayIntroduction;
function setFiglet(message) {
    figlet(
        message,
        {
            font: "Larry 3D",
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 80,
            whitespaceBreak: true,
        },
        function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            // console.log(gradientString("#fe0130", "#0f85ff").multiline(data));
            console.log(gradientString.pastel.multiline(data));
        }
    );
}

// driver code using top level await
await welcome();
await downloadAnimation("User Profile");
await downloadAnimation("Contact Information");
await downloadAnimation("Skills and Expertise");
await downloadAnimation("Certifications");
await downloadAnimation("Project Details");
await downloadAnimation("Resume");
await downloadAnimation("Hobbies and Interests");
await question1();
