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

function printHeaderInBox(header) {
    const newHeader = `| ${header} |`;
    let bar = "";
    for (let i = 0; i < newHeader.length; i++) {
        bar += "-";
    }
    console.log(chalk.yellowBright(bar));
    console.log(chalk.yellowBright(newHeader));
    console.log(chalk.yellowBright(bar));
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
    printHeaderInBox("Contact Information");
    console.log("\nYou can find me on the following platforms.");
    console.log("--------------------------------------------");
    contacts.forEach((contact) => {
        console.log(chalk.cyanBright(`${contact.platform}: `));
        console.log(`\tusername: ${contact.username}`);
        if (contact.link !== null) {
            console.log(`\tlink: ${contact.link}`);
        }
        console.log("--------------------------------------------");
    });
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
    printHeaderInBox("Educational Background");
    console.log("\n--------------------------------------------");
    educations.forEach(async (education) => {
        console.log(`${chalk.greenBright(education.level)}`);
        console.log(`\t${education.institute}`);
        console.log(`\t${education.startYear} - ${education.passYear}`);
        console.log("--------------------------------------------");
    });
}

function skillsAndExpertise() {
    // skill based on current year 2023
    const skills = [
        {
            name: "C",
            level: "Intermediate",
            category: "Programming Language",
            experience: "3 years",
        },
        {
            name: "C++",
            level: "Intermediate",
            category: "Programming Language",
            experience: "3 years",
        },
        {
            name: "JavaScript",
            level: "Advance",
            category: "Programming Language",
            experience: "5 years",
        },
        {
            name: "TypeScript",
            level: "Intermediate",
            category: "Programming Language",
            experience: "1 year",
        },
        {
            name: "Bash",
            level: "Beginner",
            category: "Programming Language",
            experience: "1 year",
        },
        {
            name: "HTML",
            level: "Advance",
            category: "Markup Language",
            experience: "5 years",
        },
        {
            name: "CSS",
            level: "Advance",
            category: "Stylesheet Language",
            experience: "5 years",
        },
        {
            name: "SASS",
            level: "Advance",
            category: "Stylesheet Language",
            experience: "3 years",
        },
        {
            name: "Bootstrap",
            level: "Advance",
            category: "Framework and Library",
            experience: "2 years",
        },
        {
            name: "Tailwind",
            level: "Intermediate",
            category: "Framework and Library",
            experience: "2 years",
        },
        {
            name: "React",
            level: "Intermediate",
            category: "Framework and Library",
            experience: "2 years",
        },
        {
            name: "Express",
            level: "Intermediate",
            category: "Framework and Library",
            experience: "1 year",
        },
        {
            name: "Node js",
            level: "Intermediate",
            category: "Runtime Environment",
            experience: "1 year",
        },
        {
            name: "MySQL",
            level: "Intermediate",
            category: "Database",
            experience: "2 years",
        },
        {
            name: "MongoDB",
            level: "Intermediate",
            category: "Database",
            experience: "1 year",
        },
        {
            name: "Git and GitHub",
            level: "Advance",
            category: "Version Control",
            experience: "3 years",
        },
        {
            name: "npm",
            level: "Intermediate",
            category: "Package Manager",
            experience: "1 year",
        },
        {
            name: "Linux",
            level: "Intermediate",
            category: "Operating System",
            experience: "2 years",
        },
        {
            name: "Photoshop",
            level: "Beginner",
            category: "Design and Graphics",
            experience: "2 years",
        },
    ];
    printHeaderInBox("Skills and Expertise");
    console.log("\n--------------------------------------------");
    skills.forEach(async (skill) => {
        console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
        console.log(`\t${skill.level} / ${skill.experience}`);
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
        choices: [
            "Educational Background",
            "Contact Information",
            "Skills and Expertise",
            "Projects",
            "Hobbies and Interests",
            "Exit",
        ],
        message: "What would you like to know about me?",
    });
    switch (ans.option) {
        case "Contact Information":
            contactInformation();
            break;
        case "Educational Background":
            educationalBackground();
            break;
        case "Skills and Expertise":
            skillsAndExpertise();
            break;
        case "Projects":
            console.log("soon");
            break;
        case "Hobbies and Interests":
            console.log("soon");
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
// await welcome();
// await introduction();
await userInterface();
