//  Object

let bio = {
	firstName: 'Dipayan',
	lastName: 'Biswas',
	age: 23,
	profession: 'Web Developer',
};

console.log(bio);
console.log(bio.firstName);

bio.profession = 'Student'; // Updating the value of profession
console.log(bio);

// for in

for (let x in bio) {
	// console.log(x); // Gives all the keys
	console.log(bio[x]); // Gives all the values
}
