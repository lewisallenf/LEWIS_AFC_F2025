// script.js
// Name: Lewis Allen
// Task5 - Temperature Classifier

// Step 1: Creates a function called classifyTemperature that uses the celcius const, which will be defined later on
function classifyTemperature(celsius) {
    // Step 2: Creates a const called fahrenheit whoes value is calculated by the called const of celsius and used in
    // the calculation
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // Step 3: this is an if function taht compares the value of the const fahrenheit with diffrent number values.
    //if the boolean of the first check is true, it will return hot. if it is false, it will continue to the next line of code
    // so on and so forth.
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Step 4: Creates a const called input whos value is the string given by the user after a prompt is given.
const input = prompt("Enter temperature in Celsius:");

// Step 5: Creates a const named celsius whos number value is created from the input const converted to numbers with the Numbers constructor.
const celsius = Number(input);

// Step 6: Validates if the value in celsius const is not a number. (NaN) If it is, it will print the prompt to the user.
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Step 7: Creates a const called classification that uses the ClassifyTemperature function and the celsius number to return the value of the function.
    const classification = classifyTemperature(celsius);

    // Step 8: LPrints to the user the prompt and the value inside the classification const.
    console.log("The temperature is:", classification);
}