//Takes another function as an argument
function greet(msg){
console.log("welcome "+msg);
}


function call(back){
    let name ="Aditya";
    console.log(typeof back);
    return back(name);
}

call(greet);

//Returns a function
function multiplier(factro){
    return function(digit){
        return factro*digit;
    }
}
let mul=multiplier(8);
console.log(mul(5));
console.log(multiplier(7)(5));

//Common Built-in Higher-Order Functions in JavaScript

//map()-used to tranform each element from array using array function

let arr=[8,7,5,4,6,9,2,4,6,3];

let arr2=arr.map(n=>n*2);
console.log(arr2);

//filter()-return a array which match condition

let arr3=arr.filter(n => n%2==0 )
console.log(arr3);

//reduce()-- combine sum of all elements of array into single value
let sum=arr.reduce((a,b)=>a+b,0);
console.log(sum);
console.log(typeof sum);
