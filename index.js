#! /usr/bin/env node

import figlet from "figlet";
import gradientString from "gradient-string";
import chalk from "chalk";
import inquirer from "inquirer";
import nanospinner from "nanospinner";

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

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

async function downloadAnimation(downloadName) {
    const spinner = nanospinner.createSpinner(`Downloading ${downloadName}...`).start();
    await sleep(700);
    spinner.success({ text: `${downloadName} Downloaded` });
}

async function welcome() {
    setFiglet("_Aaryash_\n_Shakya_\n");
    await sleep();
    await downloadAnimation("User Profile");
    await downloadAnimation("Contact Information");
    await downloadAnimation("Skills and Expertise");
    await downloadAnimation("Certifications");
    await downloadAnimation("Project Details");
    await downloadAnimation("Resume");
    await downloadAnimation("Hobbies and Interests");
    await sleep();
}

async function introduction() {
    console.log(chalk.greenBright("\n\nHI! I am Aaryash Shakya."));
    await sleep();
    console.log("I am a MERN Stack developer.");
    console.log("I am BSc. CSIT student at Sagarmatha College of Science and Technology.");
    console.log("My favorite programming tools are TypeScript, SCSS, and C++.");
    console.log("Feel free to connect with me on the following platforms.\n");
    console.log("LinkedIn: https://www.linkedin.com/in/aaryash-shakya/");
    console.log("Github: https://www.github.com/Aaryash-Shakya/");
}

async function userInterface() {
    console.log(chalk.greenBright("\n+++++++++++++++++++++++++++++++++++++++++++++++++++"));
    let exit = false;
    let ans = await inquirer.prompt({
        name: "option",
        type: "list",
        choices: ["Educational Background", "Contact Information", "Exit"],
        message: "What would you like to know about me?",
    });
    switch (ans.option) {
        case "Educational Background":
            console.log("I am padante");
            break;
        case "Contact Information":
            console.log("Social media");
            break;
        case "Exit":
            exit = true;
            break;
        default:
            "invalid option";
    }
    if (exit) {
        console.log("Exiting");
    } else {
        userInterface();
    }
}

// driver code using top level await
console.clear();
await welcome();
await userInterface();
