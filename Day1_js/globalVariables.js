// var message=10;
// console.log(window.message);

globalThis.counter = 24; // set global dont use let var and const in node.js--Explicitly set global
function test()
{
var counter = 10;
console.log(globalThis.counter); 
}
test()
var counter = 58; //if we change at any position value become undefined at global
console.log(globalThis.counter); 
counter=30;
console.log(globalThis.counter); 

