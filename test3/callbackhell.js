

// console.log("calling from fun 1"); // 1000
// setTimeout(() => {
//     console.log("calling from fun 2"); // 1 min
// }, 2000);
//  // waiting state for 2 sec
// console.log("calling from fun 3"); //1000


// call back hell


function getCheese(callbackfun){  
    setTimeout(()=>{
        const cheese = "🧀";
        console.log(`here is your ${cheese}`);
        callbackfun(cheese);
    }, 2000);
}



function getdough(cheese, callbackfun){
    setTimeout(() => {
        const dough = "🍪";
        console.log(`${dough} + ${cheese}`);
        callbackfun(dough);
    }, 2000)
}


function bakeapizza(dough, callbackfun){
    setTimeout(() => {
        const pizza = "🍕";
        console.log(`${pizza} + ${dough}`);
        callbackfun(pizza);
    }, 2000)
}

getCheese((cheese)=>{
    getdough(cheese, (dough)=>{
        bakeapizza(dough, (pizza)=>{
            console.log("here is your pizza ready");
        })
    })
});

// call back hell / IOC








