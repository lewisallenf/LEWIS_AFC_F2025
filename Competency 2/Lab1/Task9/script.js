// script.js
// Name: Lewis Allen
// Task 9 - Weekday Detector

// creates a const called getWeekday that will use an imput in the function.
const getWeekday = () => {
// a const called today that will pull the current date.
    const today = new Date();
// creates a const called dayNumber that gets the current day and gives what day of the week it is via numbers from 0-6.
    const dayNumber = today.getDay();
    // creates an Array called days, that allocates the days of the week.
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // returns the day of the week.
    return days[dayNumber];
};
// prints the phrase and result of the getWeekday function.
console.log("Today is:", getWeekday());