// script.js
// Name: Lewis Allen
// Task6 - Student Array Operations

// Step 1: Creates an array named students whos object conatin both a name string, and an age Numbers.
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// Step 2: Creates the const called updateStudentAge that equals the array. the arrow function creates a the object on the back half of the arrow will gain
// the function that the arrow points at.
const updateStudentAge = (array) => {
    // Step 3: Prompts the user for the student name and stores it in the studentName as a string variable.
    let studentName = prompt("Enter the student's name to update:");

    // Step 4: array.find is a command that searches through the array, looking for what is indicated. s is the const that compares the names in the array
    // with the prompt seearch from the user. the .toLowerCase allows the like items that could be captial or lowercase to be compaired.
    //the answer is stored withing the const student
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // Step 5: If the student search came back false and didnt find the name the console with print to the user a prompt.
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // Step 6: Prompts the user to enter a age. Number constructer will converts the string into numbers
    // stores the total value in const named newAge.
    let newAge = Number(prompt("Enter the new age:"));

    // Step 7: Compares to see if the newAge const has a value and not NaN.
    // if it is NaN than the console will print the prompt to the user.
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // Step 8: The value in the age object inside the student array is now the same as the newAge const
    student.age = newAge;

    // Step 9: the console prints the prompt to the user with the array attached.
    console.log("Updated students:", array);
};

// Step 10: Call the arrow function the array of the students
updateStudentAge(students);