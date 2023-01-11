// Array and Array Methods

let skills = [
	'HTML',
	'CSS',
	'JavaScript',
	'Tailwind CSS',
	'Bootstrap',
	'ReactJS',
];

console.log(skills); // Print the whole array

// Array index starts from 0
console.log(skills[2]); // Print JavaScript, beacause JavaScript has index 2

console.log(skills.length); // Length of the array => 6

console.log(skills[skills.length - 1]); // Get the last element of the array

skills[4] = 'Java'; // Replace the existing element with the new element
console.log(skills);

// New way to define array, but NOT Recommended
let num = new Array(1, 2, 3, 4, 5);
console.log(num);

// Push => Insert new values to the end of the array
skills.push('Python'); // Inserts Python at the end of the array
console.log(skills);

// Pop => Delete last element from an array
skills.pop(); // Removes Python from the array
console.log(skills);

// Slice => Extract all the array elements between start index and end index. End index is excluded.
let colors = ['black', 'white', 'orange', 'pink', 'blue', 'green'];
console.log(colors.slice(1, 4)); // Extract (4-1) = 3 elements from starting index 1. => white,orange,pink

// Splice => Insert new elements to the start index and delete existing elements from the start index
// Syntax: array.splice(start index, deleteCount, item1, item2, item3...);
colors.splice(2, 1, 'red', 'violet'); // From index 2, insert red and violet and delete 1 element(pink).
console.log(colors);

// Concatenation => Merge two or more arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['Dipayan', 2, 9, 10];
let arr3 = ['a', 'z'];
console.log(arr1.concat(arr2, arr3));

// Fill => Fill the array with the specified value between start index to end index. End index is excluded.
let arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.fill('abc', 2, 5); // Fill index 2 to index 4 with abc.
console.log(arr4);

//Includes => Check wheather an element exists in the array or not. Also we can check if the element exists from a specified index or not. It returns true or false.
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr5.includes(5)); // true
console.log(arr5.includes(7, 4)); // Search if 7 is present in the array from index 4 => true
console.log(arr5.includes(3, 5)); // Search if 3 is present in the array from index 5 => false

// indexOf => Returns the first index of the specified element and returns -1 if the element is not present in the array.
let arr6 = [1, 2, 3, 4, 5, 4, 7, 4, 9];
console.log(arr6.indexOf(4)); // First index of 4 => 3
console.log(arr6.indexOf(10)); // -1

// isArray => Check if a variable is array or not.
let arr7 = [1, 2, 3, 4, 5];
let x = 'Dipayan';
console.log(Array.isArray(arr7)); // true
console.log(Array.isArray(x)); // false

// Join => Creates a new string by joining the array elements, separated by comma or specified string.
let arr8 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr8.join()); // 1,2,3,4,5,6,7
console.log(arr8.join('_')); // 1_2_3_4_5_6_7

// lastIndexOf => Returns the last index of the specified element and returns -1 if the element is not present in the array.
let arr9 = [1, 2, 3, 4, 5, 3, 7, 3, 8];
console.log(arr9.lastIndexOf(3)); // Last index of 3 => 7
console.log(arr9.lastIndexOf(6)); // -1

// Map => Creates a new array by calling a function for each array element. Does not change the original array.
let arr10 = [1, 2, 3, 4, 5, 6, 7];
let newArr = arr10.map((n) => n * n); // Calling arrow function for each element
console.log(newArr); // [1, 4, 9, 16, 25, 36, 49]

// Reverse => Reverse an array
let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr11.reverse());

// Shift => Removes the first element from an array and returns the removed element
let arr12 = ['Dipayan', 56, 2, 3, 8, 6, 10];
console.log(arr12.shift()); // Removes Dipayan
console.log(arr12); // [56, 2, 3, 8, 6, 10]

// Unshift => Adds one or more elements at the begining of the array and returns the length of the array
let arr13 = [1, 2, 3, 4, 5];
console.log(arr13.unshift('Dipayan', 'Biswas')); // Returns length of the array => 7
console.log(arr13); // [ 'Dipayan', 'Biswas', 1, 2, 3, 4, 5 ]

// Convert a string to an array
let string = 'Dipayan';
console.log(string.split('')); // Creates an array by splitting every character of string

// For Of
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];
let upperMonths = [];
for (const item of months) {
	upperMonths.push(item.toUpperCase());
}
console.log(upperMonths);
