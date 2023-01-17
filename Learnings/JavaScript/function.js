// Function => A block of codes that preforms a particular task.

function addition(num1, num2) {
	let result = num1 + num2;
	return result;
}

function subtraction(num1, num2) {
	let result = num1 - num2;
	return result;
}

function multiplication(num1, num2) {
	let result = num1 * num2;
	return result;
}

function division(num1, num2) {
	let result = num1 / num2;
	return result;
}

let add = addition(12, 3);
console.log('Addition: ' + add);

let subtract = subtraction(12, 3);
console.log('Subtraction: ' + subtract);

let multiply = multiplication(12, 3);
console.log('Multiplication: ' + multiply);

let divide = division(12, 3);
console.log('Division: ' + divide);

// String

function github(username) {
	let url = 'https://github.com/';
	let result = url + username;
	return result;
}

let githubProfile = github('d1payan');
console.log('GitHub Link: ', githubProfile);

// Passing array as argument

function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

let sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = sum(sumArray);
console.log(result);

// Passing many values as argument

function sumAll() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	return sum;
}

let output = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log('Sum: ', output);

// Arrow Function

let arrowFunction = () => {
	console.log('This is arrow function');
};

arrowFunction();
