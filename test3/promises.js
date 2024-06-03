
// how to create a promise

const promise = new Promise(function(resolve,reject){
    // async
    setTimeout(()=>{
        console.log("This is promise");
        resolve();
    }, 2000);
});

// console.log("helllooooo");

promise.then(()=>{
    console.log("Promise is fullfilled");
});


// 2 approach

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("This second promise");
        resolve();
    },2000);
}).then(()=>{
    console.log("second Promise is fulfilled...");
})



// 3 promise

const promiseThree = new Promise(function(resolve,reject){
    // async
    setTimeout(()=>{
        console.log("This is promise 3");
        resolve({"username":"harry", "pass":"123"}); // pass only one data here
    }, 2000);
});

promiseThree
.then((user)=>{
    // console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);    
})


// 4 promises

const promisefour = new Promise(function(resolve,reject){
    // async
    setTimeout(()=>{
        console.log("This is promise 4");
        const err = true;
        if(!err){
            resolve({"username":"harry", "pass":"123"});
        }
        else{
            reject("Error occured in promises 4");
        }


    }, 2000);
});

promisefour.then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("Finally always executed"));