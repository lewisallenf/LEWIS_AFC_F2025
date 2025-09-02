// script.js
// Name: Lewis Allen
// Lab1 - Dynamic Age Calculator

// Step 1: Creates a function that we called calculateAge that uses the users input year of birth.
function calculateAge(year) {
    // Step 2: Defines a constant variable named currentYear that stores the full year extracted from the Date constructor.
    const currentYear = new Date().getFullYear();

    // Step 3: subtracts the year entered with the constanct variable currentYear and returns the result.
    return currentYear - year;
}

// Step 4: Promts the user with the current message. The resulting input of the user is imported into a constant String variable
// called input.
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: Converts the numbers of the stored input string of the user, into numbers and put that in a constant variable
// called birthYear
const birthYear = Number(input);

// Step 6: an if statment is a boolean function that checks to make sure the stored constant string variable named input has data in it and insures that it is equil
// to null. If that is returned false
//it checks to make sure that there are valid numbers that are stored inside the constant variable birthYear .
if (input === null || Number.isNaN(birthYear)) {
    // Step 7: If both of the constant variables labels "input" and "birthYear" return true, it will continue
    //to print the following message.
    console.log("No valid year provided.");
} else {
    // Step 8: the else statment is the second half of the if boolean function that activates when the
    // If statment return false, it will than create a constant variable called age which is equil to the function birthyear.
    const age = calculateAge(birthYear);

    // Step 9: displays the following message, and than displays to the user the constant variable that created using the previous code.
    console.log("Your age is:", age);
}