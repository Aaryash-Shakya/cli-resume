#! /usr/bin/env node

import figlet from "figlet";
import gradientString from "gradient-string"

let coolGradient = gradientString('red', 'green', 'blue');

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome(){
    setFiglet("_Aaryash_\n_Shakya_\n");
    await sleep();
    console.log();
    console.log();
    console.log("Aaryash Shakya.");
    console.log("I'm a MERN Stack developer with a passion for coding.");
    console.log("I'm currently studying BSc. CSIT at Sagarmatha College of Science and Technology.");
    console.log("My favorite programming tools are TypeScript, SCSS, and C++.");
    console.log("Feel free to connect with me on the following platforms.\n");
    console.log("LinkedIn: https://www.linkedin.com/in/aaryash-shakya/");
    console.log("Github: https://www.github.com/Aaryash-Shakya/");
}

// async function displayIntroduction() {
//     await delayPrint(gradientString('#4bad3b', '#4bad3b')("M -> MongoDB"), 200);
//     await delayPrint(gradientString('#efd81d', '#efd81d')("E -> Express"), 200);
//     await delayPrint(gradientString('#61dbfb', '#61dbfb')("R -> React"), 200);
//     await delayPrint(gradientString('#7ec727', '#7ec727')("N -> Node.js"), 500);
    
// }

// Call the function to display the introduction
// module.exports = displayIntroduction;
function setFiglet(message) {
    figlet(message, {
        font: "Larry 3D",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    }, function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        // console.log(gradientString("#fe0130", "#0f85ff").multiline(data));
        console.log(gradientString.pastel.multiline(data));
    });
}

// driver code using top level await
await welcome();
