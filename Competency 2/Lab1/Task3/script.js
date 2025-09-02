// script.js
// Name: Lewis Allen
// Task3 - Favorite Color Selector

// Step 1: Creats an array of stringscalled colors. each part of the array are strings representing diffrent types of colors.
let colors = ["red", "blue", "green"];

// Step 2: Creates a function named addColor and has one placeholder that is refrencing the colors array . this is also a perameter which will be used for the
//product of the user input.
function addColor(colorsArray) {
    // Step 3: prompts the user for a color than adds the string to the const named newColor.
    const newColor = prompt("Enter a color to add:");
    // Step 4: calls the colorsArray parameter and deligates the newColor from the users input and unshift, puts the input
    //to the beginning of the array
    colorsArray.unshift(newColor);
    // Step 5: Prints to the user that the color has updated and shows the updated array.
    console.log("Updated colors:", colorsArray);
}


// Step 6: Call the function that was just created and uses the array of colors.
addColor(colors);
