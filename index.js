function delayPrint(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

async function displayIntroduction() {
    await delayPrint("Hello! I'm Aaryash Shakya.", 1000);
    await delayPrint("I'm a software developer with a passion for coding.", 1000);
    await delayPrint("My favorite programming languages include JavaScript, Python, and Java.", 1000);
    await delayPrint("I enjoy building web applications and exploring new technologies.", 1000);
    await delayPrint("Feel free to connect with me on LinkedIn: https://www.linkedin.com/in/aaryash-shakya/", 1000);
}

// Call the function to display the introduction
displayIntroduction();
