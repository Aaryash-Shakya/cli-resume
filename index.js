#! /usr/bin/env node
// function simplePrint() {
//     return "Hello I am Aaryash Shakya";
// }
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
    await delayPrint("LinkedIn: https://www.github.com/Aaryash-Shakya/", 1000);
}

// Call the function to display the introduction
// module.exports = displayIntroduction;
displayIntroduction();
