// script.js
// Name: Lewis Allen
// Task 7 - Grade Classification

//Step 1: Creates a const called classifyGrade that uses the parameter called grade that is defined by the arrow function
// that compares the input value witha a set of numbers and returns the cordinating strings.
const classifyGrade = (grade) =>

    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

//Step 2: This Prompts the user to enter a grade number and that string gets stored in the input const.
const input = prompt("Enter a grade (0-100):");
//Step 3: The input const gets changed to numbers witht he Number Constructor and the value gets stored in the grade const.
const grade = Number(input);
//Step 4: This compares the value of grade with Not a Number, if the variable is true
//the console will print the prompt to the user.
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // If boolean comes back false, this will pass the input grade value from the user to the classifyGrade const with the grade function
    // and returns the corisponding String. Than prints the Prompt and the coorisponding String
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}