


// 1 way
const perform = (n1,n2, operation) => {
    return operation(n1,n2);
}


const res = perform(2,5, function add(a,b){
    return a+b;
});


console.log(res);


// 2 way
const mult = (a,b) => a*b;

let res2 = perform(5,3, mult);

console.log(res2);


// 3 way

const res3 = perform(2,5, (a,b)=> a-b);
console.log(res3);










