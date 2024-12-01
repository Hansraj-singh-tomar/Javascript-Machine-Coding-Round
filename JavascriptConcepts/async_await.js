// From Feel Free To Code

// promises ka result ko access karne ke liye hamare pass another method hai async and await.

// instead of using .then and .catch we can use async and await.

function pass() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Iphone 12 : 😎");
        }, 2000);
    });
}

async function task() {
    const result = await pass();
    console.log(result);
}

//! For error handling
async function task() {
    try {
        const result = await pass();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

task();

