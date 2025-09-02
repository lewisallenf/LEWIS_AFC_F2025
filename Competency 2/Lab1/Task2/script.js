// script.js
// Name: Lewis Allen
// Lab2 - Simple Interest Calculator

// Step 1: Creates a FUNCTION CALLED CALCULATESIMPLEINTEREST that will use three const to calculate interest.
function calculateSimpleInterest(principal, rate, time) {
    // this will return the total number after calculating with the formula.
    return (principal * rate * time) / 100;
}

// Step 2: this const is called principal and it is the byproduct of what the user inputs. but first it gives the user a
// prompt than what ever string is recieved from the user is than converted to a number with the Number constructor.
const principal = Number(prompt("Enter the principal amount:"));

// Step 3: does the same thing as step two, but for the rate of interest.
const rate = Number(prompt("Enter the rate of interest:"));

// Step 4: does the same thing as step 2 and step 3, but for the amount of years.
const time = Number(prompt("Enter the time in years:"));

// Step 5: calls the function we created at the begining of the scrip and inputs the const that was given by the user
// it calculates the numbers and puts the total inside of the const interest.
const interest = calculateSimpleInterest(principal, rate, time);

// Step 6: Prints the given prompt and the const interest, which was calculated from the formula.
console.log("Your simple interest is:", interest);