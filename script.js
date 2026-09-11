const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

const originalHeading = "Welcome to My Interactive Webpage";
const originalBackground = "#f4f7fb";

function handleGreetingClick() {
    const name = nameInput.value.trim();

    if (name === "") {
        mainHeading.textContent = "Please enter your name.";
        messageArea.textContent = "The name field cannot be empty.";
        return;
    }

    mainHeading.textContent = `Hello, ${name}!`;
    messageArea.textContent = "Your personalized greeting has been displayed.";

    console.log("Greeting button was clicked.");
}

function handleBackgroundClick() {
    pageContainer.style.backgroundColor = "#e8f5e9";
    document.body.style.backgroundColor = "#dff3e3";
    messageArea.textContent = "The background color was changed.";

    console.log("Background button was clicked.");
}

function handleResetClick() {
    mainHeading.textContent = originalHeading;
    nameInput.value = "";
    document.body.style.backgroundColor = originalBackground;
    pageContainer.style.backgroundColor = "white";
    messageArea.textContent = "";

    console.log("Page was reset to its original appearance.");
}

function handleInput() {
    const currentText = nameInput.value;

    if (currentText === "") {
        messageArea.textContent = "";
    } else {
        messageArea.textContent = `You are typing: ${currentText}`;
    }

    console.log(`Input event: ${currentText}`);
}

function handleMouseover(event) {
    console.log(`The mouse is over the ${event.target.id}.`);
}

greetingButton.addEventListener("click", handleGreetingClick);
backgroundButton.addEventListener("click", handleBackgroundClick);
resetButton.addEventListener("click", handleResetClick);
nameInput.addEventListener("input", handleInput);

greetingButton.addEventListener("mouseover", handleMouseover);
backgroundButton.addEventListener("mouseover", handleMouseover);
resetButton.addEventListener("mouseover", handleMouseover);

console.log("Event-driven webpage JavaScript loaded successfully.");
