//Javascript Array Methods 
const bikes=[
    { name : "Pulsar" , price : 125000 },
    { name : "Splendor" , price : 100000 },
    { name : "Mt-15" , price : 155000 },
    { name : "R15" , price : 140000 },
    { name : "NS160" , price : 170000 },
    { name : "ZX10R" , price : 1700000 }
]

// 1.filter funtion
//get bikes having price greater that 150000
let filteredBikes= bikes.filter((bike)=> bike.price>=150000);
console.log(filteredBikes);


// 2. Map Function
//we can directly print names by using map function but map function use to return new array 
bikes.filter((bike)=> bike.price>=150000).map(bike=>console.log("map-"+bike.name));

//create new array using map having only names of bike
let bikenames=bikes.filter((bike)=> bike.price>=150000).map(bike=> bike.name);
console.log(bikenames);

//3.Find Funtion
//get specific object by comparing its property
//I want to print object having name NS160

let ns=bikes.find((bike)=>bike.name === 'NS160');
console.log(ns);
console.log(ns.name+" "+ns.price);

//4.foreach
//print name of all bikes from Bikes
bikes.forEach((bike)=> console.log("all bikes="+bike.name));

//print only names of bikes from filteredBikes
bikes.filter((bike)=> bike.price>=150000).forEach(bike=>console.log("filteredBikes-"+bike.name));

//5.some function 
//return true or false by check condition for entire array
//if one item returns true it return true and if all items return false only then it return false 

//e.g. I have to check bikes in array are expension or not. if price of all bikes are greater than 100000 then it return true for expensive.
let expensive = bikes.some((bike)=> bike.price>=150000);
console.log("some= "+expensive); 

//e.g. check for price above 20L return mostexpensive
let mostexpensive =bikes.some((bike)=>bike.price>=2000000);
console.log("some= "+mostexpensive);

//6.every funtion
//return true when all items return true 
//check all bikes value is above 100000
let test=bikes.every((bike)=>bike.price>=100000)
console.log("every= "+test);

//7.reduce
//used to return one varible by performing operation on items in array
//add price of bikes in one variable
let total=bikes.reduce((currentTotal,bike)=> bike.price+currentTotal,0)
console.log("reduce= "+total);

//8.include
//check item is present or not in array
let arr=[57,8,5,6,2,4,5,1,9]

console.log("includes= "+arr.includes(8));