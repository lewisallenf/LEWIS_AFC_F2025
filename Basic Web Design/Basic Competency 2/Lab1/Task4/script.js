// script.js
// Name: Lewis Allen
// Task4 - Event Countdown with Date Object

// Step 1: creates a function that is called calculateDayUntil and will use the eventDate string that is given from the user later on, within the parameters.
function calculateDaysUntil(eventDate) {
    // Step 2: creates a const called today that will call the Date object and store the current date.
    const today = new Date();

    // Step 3: creates an const called event that will take the string called eventDate and convert it to numbers and put it in
    //the correct Date format.
    const event = new Date(eventDate);

    // Step 4: Creates a const called diff whos number is the event subtracted from todays date.
    const diff = event - today;

    // Step 5: Creates a const called days, whos number is calculated from the number from diff const and deviding that by the total of
    // the mathmatical problem taht solves for the nearest second, and than Math.ceil method rounds the nearest whole number to avoid partial days.
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Step 6: Return number of days
    return days;
}

// Step 7: Prompt the user for the date of the event and in a certain format to allow the function calculateDaysUntil to use.
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Step 8: This regular expression makes sure that the input string of the user has put in the date format correctly.
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
// Step 8.5: This while statment will test the format of the input string from the user, if it is false it will print to the user to re type the
// date in the correct format and loop it, until they get it right.
while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Step 9: Creates a const called daysRemaining who is calculated from the called total function of calculateDaysUntil, while using the eventDate in the function.
const daysRemaining = calculateDaysUntil(eventDate);

// Step 10: Prints the prompt and the number inside the const daysRemaining.
console.log("Days until the event:", daysRemaining);