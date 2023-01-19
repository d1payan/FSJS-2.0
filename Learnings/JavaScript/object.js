//  Object

let bio = {
    firstName: "Dipayan",
    lastName: "Biswas",
    age: 23,
    profession: "Web Developer",
};

console.log(bio);
console.log(bio.firstName);

bio.profession = "Student"; // Updating the value of profession
bio["gender"] = "Male"; // Adding new property to the object
console.log(bio);

// for in

for (let x in bio) {
    // console.log(x); // Gives all the keys
    console.log(bio[x]); // Gives all the values
}

// Another way of creating object
const obj = new Object(); // constructor
obj.color = "red";
console.log(obj);

// Another way

const obj2 = Object.create(bio); // * Puts the bio object inside a prototype
console.log(obj2); // ! Prints an empty object, but we can access properties of bio object
console.log(obj2.gender); // Male

const obj3 = Object.create({});
// Adds property to the object, which we can control more
Object.defineProperty(obj3, "book", {
    get: () => "black",
    enumerable: true, // Allows the object to loop through
});

// console.log(obj3.book);

for (k in obj3) {
    console.log("Value is:", obj3[k]);
}

const obj4 = {
    language: "JavaScript",
    subject: "Object",
    // Method => When fuction is used inside an object
    learnJS: function () {
        this.subject = "function"; // this => refers to the property which is inside obj4
        console.log(this);
        return this;
    },
    // Another way of defining method
    learnJS1: () => {}, // We can not use this keyword in arrow function
};

// console.log(obj4.learnJS());

// Chaining

console.log(obj4.learnJS().learnJS().learnJS());
