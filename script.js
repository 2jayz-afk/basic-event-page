```javascript
// Select the required HTML elements.
const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

// Store the original webpage appearance.
const originalHeading = "Welcome to My Interactive Webpage";
const originalBackground = "#f4f7fb";

// Event handler for the greeting button.
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

// Event handler for the background button.
function handleBackgroundClick() {
    pageContainer.style.backgroundColor = "#e8f5e9";
    document.body.style.backgroundColor = "#dff3e3";

    messageArea.textContent = "The background color was changed.";

    console.log("Background button was clicked.");
}

// Event handler for the reset button.
function handleResetClick() {
    mainHeading.textContent = originalHeading;
    nameInput.value = "";
    document.body.style.backgroundColor = originalBackground;
    pageContainer.style.backgroundColor = "white";
    messageArea.textContent = "";

    console.log("Page was reset to its original appearance.");
}

// Event handler for the input event.
function handleInput() {
    const currentText = nameInput.value;

    if (currentText === "") {
        messageArea.textContent = "";
    } else {
        messageArea.textContent = `You are typing: ${currentText}`;
    }

    console.log(`Input event: ${currentText}`);
}

// Event handler for the mouseover event.
function handleMouseover(event) {
    console.log(`The mouse is over the ${event.target.id}.`);
}

// Event source: Greeting button.
// Event listener: click.
// Event handler: handleGreetingClick.
greetingButton.addEventListener("click", handleGreetingClick);

// Event source: Background button.
// Event listener: click.
// Event handler: handleBackgroundClick.
backgroundButton.addEventListener("click", handleBackgroundClick);

// Event source: Reset button.
// Event listener: click.
// Event handler: handleResetClick.
resetButton.addEventListener("click", handleResetClick);

// Event source: Name input.
// Event listener: input.
// Event handler: handleInput.
nameInput.addEventListener("input", handleInput);

// Event source: Buttons.
// Event listener: mouseover.
// Event handler: handleMouseover.
greetingButton.addEventListener("mouseover", handleMouseover);
backgroundButton.addEventListener("mouseover", handleMouseover);
resetButton.addEventListener("mouseover", handleMouseover);

console.log("Event-driven webpage JavaScript loaded successfully.");
```

