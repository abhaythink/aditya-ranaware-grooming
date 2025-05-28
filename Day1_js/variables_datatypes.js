console.log("welcome");

//let keyword
let a;
a="hello";
console.log(a);
//reassign value to variable
a="Hihello";
console.log(a);

//create variable
var c="hello";
console.log(c); 
//redeclare and reassign value to variable
var c="welcome";
console.log(c); 
var c=12; 
console.log(c);

//create constant 
const a1="constant";
console.log(a1);

//scope of variable is global score
if(c==12){
    var sc=58;
console.log(a1);
}
console.log(sc);

//datatypes 
var demo=null;
console.log("data type of "+demo+ " is "+typeof demo);

var demo1;
console.log("data type of "+demo1+ " is "+typeof demo);

var demo=true;
console.log("data type of "+demo+ " is "+typeof demo);
var demo=false;
console.log("data type of "+demo+ " is "+typeof demo);
var demo=52;
console.log("data type of "+demo+ " is "+typeof demo);
var demo="Hello";
console.log("data type of "+demo+ " is "+typeof demo);

const mySymbol = Symbol('example');
console.log("data type of mysymbol is "+ typeof mySymbol);
console.log(mySymbol);            
console.log(typeof mySymbol);    

const bigint=BigInt(58746958);
console.log(bigint);            
console.log(typeof bigint);    

let contact = {
    firstName: 'Aditya',
    lastName: 'Ranaware',
    email: 'aditya.ranaware@thinkitive.com',
    phone: '8484847585',
    address: {
        building: '404',
        street: '1st street',
        city: 'Pune',
        "state" : 'Maharashtra',
        country: 'India'
    }
}
console.log(contact);
console.log(typeof contact);  
console.log('a' == 'a');
