#! /usr/bin/env node

import figlet from "figlet";
import gradientString from "gradient-string";
import chalk from "chalk";
import inquirer from "inquirer";
import nanospinner from "nanospinner";
import { contacts, educations, skills, certifications, projects, facts } from "./data.js";

// global variables
let factIndex = 0;

const sleep = (ms = 1000) => new Promise(r => setTimeout(r, ms));

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
	await downloadAnimation("Educational Background");
	await downloadAnimation("Skills and Expertise");
	await downloadAnimation("Certification");
	await downloadAnimation("Projects");
	await downloadAnimation("Hobbies and Interests");
	await downloadAnimation("Resume");
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
	printHeaderInBox("Contact Information");
	console.log("\nYou can find me on the following platforms.");
	console.log("--------------------------------------------");
	contacts.forEach(contact => {
		console.log(chalk.cyanBright(`${contact.platform}: `));
		console.log(`\tusername: ${contact.username}`);
		if (contact.link !== null) {
			console.log(`\tlink: ${contact.link}`);
		}
		console.log("--------------------------------------------");
	});
}

function educationalBackground() {
	printHeaderInBox("Educational Background");
	console.log("\n--------------------------------------------");
	educations.forEach(async education => {
		console.log(`${chalk.greenBright(education.level)}`);
		console.log(`\t${education.institute}`);
		console.log(`\t${education.startYear} - ${education.passYear}`);
		console.log("--------------------------------------------");
	});
}

async function skillsAndExpertise() {
	printHeaderInBox("Skills and Expertise");
	let ans = await inquirer.prompt({
		name: "sortBy",
		type: "list",
		choices: ["Category (Default)", "List by Category (only names)", "Alphabetical", "Proficiency"],
		message: "Sort skills by?",
	});

	// after checking all conditions the printing algo begins so each case only sorts the array.
	// not using break on each case to reduce repetition
	switch (ans.sortBy) {
		case "List by Category (only names)":
			let currentCategory = "";
			let skillArray = [];
			console.log("\n--------------------------------------------");
			for (let i in skills) {
				if (currentCategory !== skills[i].category) {
					// on category change print the values in skillArray
					// don't execute for the first item
					if (currentCategory !== "") {
						console.log(`${chalk.greenBright(currentCategory)}: ${skillArray.join(", ")}`);
					}
					// update current category and reset skillArray
					currentCategory = skills[i].category;
					skillArray = [];
				}
				skillArray.push(skills[i].name);
			}
			console.log("--------------------------------------------");
			// exception: need break coz we are printing in list
			break;
		case "Proficiency":
			// TODO very repetitive make the output portion a separate function
			const advanceSkills = skills.filter(skill => skill.level === "Advance");
			const intermediateSkills = skills.filter(skill => skill.level === "Intermediate");
			const beginnerSkills = skills.filter(skill => skill.level === "Beginner");
			console.log("\n--------------------------------------------");
			console.log(chalk.redBright("Advance"));
			console.log("--------------------------------------------");
			advanceSkills.forEach(async skill => {
				console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
				console.log(`\t${skill.level} / ${skill.experience}`);
				console.log("--------------------------------------------");
			});
			console.log(chalk.redBright("Intermediate"));
			console.log("--------------------------------------------");
			intermediateSkills.forEach(async skill => {
				console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
				console.log(`\t${skill.level} / ${skill.experience}`);
				console.log("--------------------------------------------");
			});
			console.log(chalk.redBright("Beginner"));
			console.log("--------------------------------------------");
			beginnerSkills.forEach(async skill => {
				console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
				console.log(`\t${skill.level} / ${skill.experience}`);
				console.log("--------------------------------------------");
			});
			break;
		case "Alphabetical":
			skills.sort((a, b) => a.name.localeCompare(b.name));
		// don't break just sort
		// case "Proficiency":
		//     skills.sort((a, b) => a.proficiency.localeCompare(b.proficiency));
		// don't break just sort
		case "Category (Default)":
			console.log("\n--------------------------------------------");
			skills.forEach(async skill => {
				console.log(`${chalk.greenBright(skill.name)}  (${skill.category})`);
				console.log(`\t${skill.level} / ${skill.experience}`);
				console.log("--------------------------------------------");
			});
			break;

		default:
			console.log("Invalid option");
	}
}

function LicensesAndCertifications() {
	printHeaderInBox("Licenses And Certifications");
	console.log("\n--------------------------------------------");
	certifications.forEach(async certification => {
		console.log(`${chalk.greenBright(certification.name)}`);
		console.log(`\t${certification.issuingOrganization}`);
		console.log(`\tIssued ${certification.issuedDate}`);
		console.log(`\t${certification.credentialUrl}`);
		console.log("--------------------------------------------");
	});
}

function myProjects() {
	printHeaderInBox("My Projects");
	console.log("\n--------------------------------------------");
	projects.forEach(async project => {
		console.log(`${chalk.greenBright(project.title)}`);
		console.log(`\t${project.techStack}`);
		console.log(`\t${project.description}`);
		console.log("--------------------------------------------");
	});
}

function randomFact() {
	console.log(facts[factIndex++]);
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
			"Contact Information",
			"Educational Background",
			"Skills and Expertise",
			"Licenses and Certifications",
			"My Projects",
			"Hobbies and Interests",
			"Random Fact about me",
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
			await skillsAndExpertise();
			break;
		case "Licenses and Certifications":
			LicensesAndCertifications();
			break;
		case "My Projects":
			myProjects();
			break;
		case "Hobbies and Interests":
			console.log("soon");
			break;
		case "Random Fact about me":
			randomFact();
			break;
		// get this for yourself
		case "Exit":
			exit = true;
			break;
		default:
			console.log("invalid option");
	}
	if (exit) {
		console.log(chalk.redBright("Exiting..."));
		await sleep(150);
		console.log(chalk.red("Thank you for visiting"));
		await sleep(150);
		console.log(chalk.redBright("BYE"));
	} else {
		userInterface();
	}
}

// driver code using top level await
console.clear();
await welcome();
await introduction();
await userInterface();
