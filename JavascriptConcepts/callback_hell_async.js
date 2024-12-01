// From Feel Free To Code

// Synchronous code
console.log("first message");
console.log("second message");

let number = 90;

// it will block my rest of the code 
while (number < 10) {
    number++;
    console.log(number);
}

console.log("third message");
console.log("fourth message");

// ---------------------------------------------------------

// Asynchronous code

console.log("first message");
console.log("second message");

// it will not block my rest of the code 
setTimeout(() => {
    console.log("after 1 second");
}, 1000);

console.log("third message");

// ---------------------------------------------------------

// Why to use callback ?

function getUsers() {
    setTimeout(() => {
        let users = ["mojombo", "defunkt", "paul"];
        return users;
    }, 2000);
    // return undefined; //! internally it will return undefined
}

const users = getUsers();
console.log(users);  //! undefined

// using promise 
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = ["mojombo", "defunkt", "paul"];
            resolve(users);
        }, 2000);
    })
}

getUsers().then((users) => {
    console.log(users); // ["mojombo", "defunkt", "paul"]
})

// ---------------------------------------------------------------------

// How to use callback ?

function getUsers(callback) {
    setTimeout(() => {
        let users = ["mojombo", "defunkt", "paul"];
        callback(users);
    }, 2000);
}

getUsers((users) => {
    console.log(users); //? ["mojombo", "defunkt", "paul"]
});

// ---------------------------------------------------------------------

// Callback Hell example

function getUsers(callback) {
    setTimeout(() => {
        let users = ["mojombo", "defunkt", "paul"];
        callback(users);
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        let repositories = ["repo1", "repo2", "repo3"];
        callback(repositories);
    }, 2000);
}

function getCommits(repository, callback) {
    setTimeout(() => {
        let commits = ["commit1", "commit2", "commit3"];
        callback(commits);
    }, 2000);
}

getUsers((users) => {
    console.log(users); // ["mojombo", "defunkt", "paul"]
    getRepositories(users[0], (repositories) => {
        console.log(repositories); // ["repo1", "repo2", "repo3"]
        getCommits(repositories[0], (commits) => {
            console.log(commits); // ["commit1", "commit2", "commit3"]
        });
    });
});

// getUsers((users) => {
//     console.log(users); // ["mojombo", "defunkt", "paul"]
//     getRepositories((repositories) => {
//         console.log(repositories); // ["repo1", "repo2", "repo3"]
//         getCommits((commits) => {
//             console.log(commits); // ["commit1", "commit2", "commit3"]
//         });
//     });
// });

// ---------------------------------------------------------------------

// How we handle error in callback ?

//! Drawback - Koi bhi is getUser function ko call karke callback function pass kar sakta hai  
function getUsers(callback) {
    setTimeout(() => {
        let users = ["mojombo", "defunkt", "paul"];
        callback(null, users); //! if i'll call it three time i'll get three time users, three time repositories and three time commits
        // ! Another mistake is what if getUsers function will not call to callback function.
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        let repositories = ["repo1", "repo2", "repo3"];
        callback(null, repositories);
    }, 2000);
}

function getCommits(repository, callback) {
    setTimeout(() => {
        let commits = ["commit1", "commit2", "commit3"];
        callback(null, commits);
    }, 2000);
}

getUsers((error, users) => {
    if (error) return console.log(error);
    getRepositories(users[0], (error, repositories) => {
        if (error) return console.log(error);
        getCommits(repositories[0], (error, commits) => {
            if (error) return console.log(error);
            console.log(commits); // ["commit1", "commit2", "commit3"]
        });
    });
});