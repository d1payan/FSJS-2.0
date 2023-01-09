// Date

const date = new Date();
console.log(date.toString());

console.log(date.getFullYear()); // 2023
console.log(date.getMonth() + 1); // We are adding 1 to the month, because the count starts from 0
console.log(date.getDay()); // 1 means Monday
console.log(date.getTime()); // It will be in miliseconds
console.log(date.getHours()); // 24 hours format
console.log(date.getMinutes());
console.log(date.getSeconds());

// Math

const PI = Math.PI;
console.log(Math.round(PI)); // Convert the value to an integer
console.log(Math.round(3.5)); // If After Decimal Part >= 5, then it will round the value to 4. Otherwise it will be rounded to 3

console.log(Math.floor(7.9)); // Go down to round the value => 7
console.log(Math.ceil(7.1)); // Go up to round the value => 8

// Min and Max
console.log(Math.min(23, 4, 6, 99, 11, 2)); // Filter out the minimum value => 2
console.log(Math.max(23, 4, 6, 99, 11, 2)); // Filter out the maximum value => 99

// Random
console.log(Math.random()); // Gives a random number between 0 to 0.9999999999999999

// Power
console.log(Math.pow(5, 2));

// Log
console.log(Math.log10(10)); // log 10 base 10 => 1

// Trigonometry
console.log(Math.sin(90));
