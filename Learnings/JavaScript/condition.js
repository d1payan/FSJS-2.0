// if-else statement
// if statement evaluates if the condition is true and if the condition is false then else part evaluates

let number = 8;

if (number % 2 === 0) {
	console.log('Even number');
} else {
	console.log('Odd number');
}

// Switch Case

let user = 'Student';
switch (user) {
	case 'Admin':
		console.log('Give access to everything');
		break;
	case 'Student':
		console.log('Give access to the courses he/she purchased');
		break;
	case 'Instructor':
		console.log('Give access to the courses the instructor teaches');
		break;
	default:
		console.log("Explore the site, don't give access to anything");
}

// Ternary Operator => condition ? true : false

let m = 20;
let n = 10;
m > n
	? console.log(m, 'is greater than', n)
	: console.log(n, 'is greater than', m);
