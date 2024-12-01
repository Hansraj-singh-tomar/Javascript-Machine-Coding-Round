// By Piyush garg

// Proxy - Through something

//! Object is reference of the memory location

// Without Proxy we are able to change their properties and all
const obj = {
    age: 18,
}

obj.age = 20;
obj.fname = "abc";
obj.age = "hello"

console.log(obj); // {age: "hello", fname: "abc"}


// ---------------------------------------------------------------------------

// Using proxy we are able to change their properties
const p = {
    fname: "hansraj",
    lname: "singh",
    age: 18
}

const p1 = new Proxy(p, {
    get(target, key) {
        console.log(key); // age, for the second log it will be fname
        return "testing";
    }
});

p1.age = -20;
console.log(p1.age); // testing
console.log(p1.fname); // testing

// ---------------------------------------------------------------------------

const p2 = new Proxy(p, {
    get(target, key) {
        if (key in target) {
            // return target[key];
            return Reflect.get(target, key);
        }
        return false;
    },

    set(target, key, value) {
        if (!(key in target)) {
            throw new Error("property does not exist");
        }
        switch (key) {
            case "fname":
            case "lname":
                if (typeof value !== "string") {
                    throw new Error("fname must be string");
                }
                break;
            case "age":
                if (typeof value !== "number") {
                    throw new Error("age must be number");
                }
                if (value <= 0) {
                    throw new Error("age must be greater than 0");
                }
                break;
        }
        // target[key] = value;
        Reflect.set(target, key, value); //! js ki jo apni function hai kisi value ko set karne ke liye uss tarah se value ko set kar dega
        return true;
    },

    deleteProperty(target, key) {
        if (key in target) {
            delete target[key];
            return true;
        }
        return false;
    }
});

// p2.age = -18;
// console.log(p2.age); //! age must be greater than 0

p2.age = 100;
console.log(p2.age); // 100


// --------------------------Reflect-------------------------------------------------

// Reflect jitne bhi internal method hai unki ek factory provide karta hai
// value ko set karne samay hame refelct ka use karna chahiye 
//! istead of this line target[key] = value;
Reflect.set(target, key, value); // we must use this line