// From Piyush garg
// Why and how In js everything is object

const p1 = {
    fname: "hansraj",
    lname: "singh",
    getFullName: function () {
        return this.fname + " " + this.lname;
    }
}

const p2 = {
    fname: "piyush",
    lname: "garg",
    getFullName: function () {
        return this.fname + " " + this.lname;
    }
}

console.log(p1.getFullName()); // hansraj singh
console.log(p2.getFullName()); // piyush garg

// -------------------------------------------------------------

// Inheritance in JavaScript - Prototype
// we are DRY(Don't Repeat Yourself), for that we will use Object.create() method

const p11 = {
    fname: "hansraj",
    lname: "singh",
    getFullName: function () {
        return this.fname + " " + this.lname;
    }
}

const p22 = Object.create(p1);
console.log("p11 is", p11); // {fname: 'hansraj', lname: 'singh', getFullName: ƒ}
console.log("p22 is", p22); // {} inside [[Prototype]]: {fname: 'hansraj', lname: 'singh', getFullName: ƒ}
console.log(p22.fname); // hansraj

p11.__proto__.fname = "Hack"; //! this is not a right way
console.log(p11.fname); // Hack 


//! Explanation of above code
p1 = {
    name: "hansraj",
    age: 20,
    __proto__: {}
}

p2 = {
    __proto__: p1
}

// -------------------------------------------------------------

// Concept to remember

let fname = "hansraj"; // new String("hansraj") // Now fname string class ka object hai 
console.log(fname.__proto__);  // inside it we have all methods and properties of String class
console.log(fname.at(2)); // n

//! Note:- Js jab tak __proto__ ki value null nhi mil jati tab tak __proto__ ke andar dhundta hi rhega
//! __proto__ ko directly modify nhi karna chahiye istead of it we must use Object.create() method


// ------------------------------------------------------------

class Student {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getName() {
        return this.fname + " " + this.lname;
    }
}

const s1 = new Student("hansraj", "singh");
//! s1.__proto__ = Student.prototype
//? console.log(s1 instanceof Student); // true
//? s1.__proto__ = null // now s1 is not a Student class ka object
console.log(s1.__proto__); // {constructor: ƒ, getName: ƒ}
console.log(s1.getName()); // hansraj singh // ye __proto__ se la rha hai

const s2 = { __proto__: Student.prototype };
console.log(s2.getName()); // hansraj singh

// ------------------------------------------------------------

// Difference between __proto__ and prototype
//? Objects ke upar __proto__ hota hai
//? Base class ke upar prototype hota hai
