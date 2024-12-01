// From Feel Free To Code

// To resolve callback problem we will use Promise

const promiseOfIphone = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Iphone 12 : 😎");

        //! kitni bar bhi call kar lu resolve ko it will return only one time
        resolve("Iphone 12 : 😎");
        resolve("Iphone 12 : 😎");
        resolve("Iphone 12 : 😎");
        resolve("Iphone 12 : 😎");
    }, 2000)
});

promiseOfIphone.then((data) => {
    console.log(data); // Iphone 12 : 😎
});

// -------------------------------------------------------------------------------

//Todo:= Error handling in promise
const promiseOfIphone2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // ! ek baar me ek hi chij resolve hogi ya to resolve ya reject but jo pehle likha hoga vo return hoga
        reject("paise nhi hai abhi : 😎");
        resolve("Iphone 12 : 😎"); // ! agar resolve pehle likha ho to resolve chalenga otherwise reject
    }, 2000)
});

promiseOfIphone2
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error); // paise nhi hai abhi : 😎
    })

// -------------------------------------------------------------------------------

// How we will handle callback hell using promise?

//! number1 ke baad number2 and number2 ke baad number3 ko call karna hai 
const getNumber1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 2000);
    });
};

const getNumber2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        }, 2000);
    });
};

const getNumber3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(300);
        }, 2000);
    });
};

// Approach 1 - Promise Chaining
getNumber1()
    .then((data) => {
        console.log(data); // 100
        return getNumber2();
    })
    .then((data) => {
        console.log(data); // 200
        return getNumber3();
    })
    .then((data) => {
        console.log(data); // 300
    })


// Approach 2 - Not right way
// getNumber1()
//     .then((number1) => {
//         console.log(number1); // 100
//         getNumber2()
//             .then((number2) => {
//                 console.log(number2); // 200
//                 getNumber3()
//                     .then((number3) => {
//                         console.log(number3); // 300
//                     })
//             })
//     })
