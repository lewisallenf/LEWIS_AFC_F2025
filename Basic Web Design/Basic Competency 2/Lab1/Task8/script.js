// script.js
// Name: Lewis Allen
// Task 8 - Shopping List Operations

//Step1: Creates an array of strings objects called shoppingList
let shoppingList = ["eggs", "butter", "flour"];

//Step2: Creates a const called modifyItem taht has two parameters. the list and the newItem.
//and that will be defined by the next function.
const modifyItem = (list, newItem) => {
//Step3: list refers to the array, .push pushes the newitem at the end of the array list.
    list.push(newItem);
    // this prints out the prompt and the updated array list.
    console.log("Updated shopping list:", list);
};
// prompts the user to input a new item to the shoppinglist and stores it in userItem.
const userItem = prompt("Enter a new item to add to the shopping list:");
// if statment that checks to see if the userItem has something in it. if it does not, print the propmpt "Error"
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
// this is a function that will use the two items inside of it. shoppingList and userItem.
    modifyItem(shoppingList, userItem);
}