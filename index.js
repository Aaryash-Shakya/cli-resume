#! /usr/bin/env node

import figlet from "figlet";
import gradientString from "gradient-string"

let coolGradient = gradientString('red', 'green', 'blue');

function delayPrint(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message)
            resolve();
        }, delay);
    });
}

async function displayIntroduction() {
    await delayPrint("Hello! I'm Aaryash Shakya.", 1000);
    await delayPrint("I'm a MERN Stack developer with a passion for coding.", 1000);
    await delayPrint("I'm currently studying BSc. CSIT in Sagarmatha College of Science and Technology.", 1000);
    await delayPrint("My favorite programming languages and frameworks are TypeScript, SCSS, and C++.", 1000);
    await delayPrint("I enjoy building web applications and backend services.", 1000);
    await delayPrint("Feel free to connect with me on the following platforms.", 1000);
    await delayPrint("LinkedIn: https://www.linkedin.com/in/aaryash-shakya/", 1000);
    await delayPrint("Github: https://www.github.com/Aaryash-Shakya/", 1000);
}

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

setFiglet("_HI! I'm_\n_Aaryash_\n_Shakya_");
// displayIntroduction();
