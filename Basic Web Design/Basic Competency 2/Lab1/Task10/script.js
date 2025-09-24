// script.js
// Name: Lewis Allen
// Task 10 - How Long Until Graduation

// creates a const called getToday that will use a function. The function is to return the current date.
const getToday = () => {
    return new Date();
};
// creates a const that will use the getToday function and put the current date in today.
const today = getToday();
// creates an array called days that each day of the week are in the array
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// creates a const called weekday that uses the days of the week array and allocates the current day with the number of the array and makes the product that string.
const weekday = days[today.getDay()];
//creates an array that has every month of the year.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//creates a const called year that uses todays date gets the year.
const year = today.getFullYear();
// creates a const called month that will get the month of todays date and compare it to the current array to get the string that is allocated in that slot.
const month = months[today.getMonth()];
// creates a const that pulls the current day of the month of the current time.
const day = today.getDate();
// creates a function called getSuffix that will do the following
const getSuffix = (n) => {
    // n %100 compares the last two numbers with 11, 12, 13. If it is, it will return "th"
    if ([11, 12, 13].includes(n % 100)) return "th";
    // if not than it will use a switch to check the last digit of the number with %10, if the number ends in a 1, it iwll state "st"
    // if it ends in 2, it will return "nd"
    // if it ends in 3, it will return "rd"
    // and if it does not end in any of those, it will return "th"
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};
//creates a const called formattedDate that will combine the year, month, day, and get the last suffix witht he getSuffix function.
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);
// will print to the user the prompts and the day of the week and the formated date.
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);
// creates a const called graduationDate that puts the input date with correct format into the const.
const graduationDate = new Date("2025-11-13");
// creates a const called diff that will subtract the graduationDate and today's date
const diff = graduationDate - today;
// creates a const called daysRemaining whos result is the time down to the millisecond and rounds up the day, so there are no partial days
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));
// prints the prompts with the remaining days til graduation after calling the daysRemaining.
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");