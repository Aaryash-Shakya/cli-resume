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
    console.log("I am a MERN Stack developer with expertise in web applications.");
    console.log("Currently pursuing a BSc. CSIT degree at Sagarmatha College of Science and Technology.");
    console.log("Passionate about clean code, innovative technology, and continuous learning.");
    console.log("I have contributed to open-source projects and actively participate in coding communities.");
    console.log("My goal is to leverage technology to create innovative solutions that make a positive impact.");
}

function educationalBackground() {
    const educations = [
        {
            level: "Grade 10",
            institute: "Maitri Shishu Vidhyalaya",
            startYear: "2006 AD",
            passYear: "2018 AD",
        },
        {
            level: "+2 Science",
            institute: "National School of Sciences",
            startYear: "2018 AD",
            passYear: "2020 AD",
        },
        {
            level: "BSc. Computer Science and Information Technology",
            institute: "Sagarmatha College of Science and Technology",
            startYear: "2021 AD",
            passYear: "ongoing",
        },
    ];
    console.log("--------------------------");
    console.log("| Educational Background |");
    console.log("--------------------------");
    console.log("\n--------------------------------------------");
    educations.forEach(async (education) => {
        console.log(`Level: ${education.level}`);
        console.log(`\t${education.institute}`);
        console.log(`\t${education.startYear} - ${education.passYear}`);
        console.log("--------------------------------------------");
    });
}

function contactInformation() {
    const contacts = [
        {
            platform: "Email",
            username: "aaryashshakya.dev@gmail.com",
            link: null,
        },
        {
            platform: "Github",
            username: "Aaryash-Shakya",
            link: "https://github.com/Aaryash-Shakya",
        },
        {
            platform: "LinkedIn",
            username: "aaryash-shakya",
            link: "https://linkedin.com/in/aaryash-shakya",
        },
    ];
    console.log("-----------------------");
    console.log("| Contact Information |");
    console.log("-----------------------\n");
    console.log("You can find me on the following platforms.");
    console.log("--------------------------------------------");
    contacts.forEach((contact) => {
        console.log(`${contact.platform}: `);
        console.log(`\tusername: ${contact.username}`);
        if (contact.link !== null) {
            console.log(`\tlink: ${contact.link}`);
        }
        console.log("--------------------------------------------");
    });
}

async function userInterface() {
    console.log(
        chalk.greenBright("\n\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    );
    let exit = false;
    let ans = await inquirer.prompt({
        name: "option",
        type: "list",
        choices: ["Educational Background", "Contact Information", "Exit"],
        message: "What would you like to know about me?",
    });
    switch (ans.option) {
        case "Educational Background":
            educationalBackground();
            break;
        case "Contact Information":
            contactInformation();
            break;
        case "Exit":
            exit = true;
            break;
        default:
            console.log("invalid option");
    }
    if (exit) {
        console.log(chalk.red("Exiting..."));
        await sleep(300);
        console.log(chalk.red("BYE"));
    } else {
        userInterface();
    }
}

// driver code using top level await
console.clear();
await welcome();
await introduction();
await userInterface();
