let date = new Date()
console.log(date);


// Current date and time
const currentDate = new Date();

// Specific date and time (year, month - 1, day, hour, minute, second, millisecond)
const specificDate = new Date(2024, 3, 14, 12, 30, 0, 0);

// Using a string representation of date
const dateString = new Date("2024-04-14T12:30:00");


const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-indexed (0 represents January, 11 represents December)
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();
const millisecond = currentDate.getMilliseconds();


//Formating Dates

let todaysDate = new Date()

let formattedDate = todaysDate.toLocaleString()
let toDateString = todaysDate.toDateString();
let isoDate = todaysDate.toISOString()
let utcDate = todaysDate.getUTCDate();

console.log(toDateString);
console.log(formattedDate);
console.log(isoDate);
console.log(utcDate);

// Comparison between two dates


let newDate =  Date.now();

console.log(Math.floor(newDate/1000));

const date1 = new Date(2024, 4, 14);
const date2 = new Date(2024, 4, 15);

if (date1.getTime() < date2.getTime()) {
    console.log(`${date1.toLocaleDateString()} is before ${date2.toLocaleDateString()}`);
}
