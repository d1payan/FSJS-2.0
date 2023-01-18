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
bio['gender'] = 'Male'; // Adding new property to the object
console.log(bio);

// for in

for (let x in bio) {
	// console.log(x); // Gives all the keys
	console.log(bio[x]); // Gives all the values
}

// Another way of creating object
const obj = new Object(); // constructor
obj.color = 'red';
console.log(obj);
