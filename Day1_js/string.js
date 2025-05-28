
//string using backtick
let mesage = `"I'm good". She said`;
console.log(mesage);

//create string
let str='java';
console.log(str);
//modify existing string
str=str+'script';
console.log(str);

//use value of another string in string using backtick
let name = 'John';
let message = `Hi, I'm ${name}.`;
console.log(message);


//convert string to boolean
let bool=Boolean(str);
console.log("data type of "+ bool+" is "+ typeof bool);

//length function of string
let str1 = "Good Morning!";
console.log("length of string="+str1.length);  

//print first character of string 
console.log("first character of "+str1+" is "+str1[0]); 
//print last character of string 
console.log("last character of string="+str1[str1.length -1]);  

//Concatenating strings
let name2 = 'Adi';
let str2 = 'Hello ' + name2;
console.log(str2); 

//convert boolean to string using toString function
let flag = false;
let str3 = flag.toString();
console.log(flag);
console.log("converted to string = "+ str3);

//convert back to boolean
let back = Boolean(str3); 
console.log("convert back to boolean= "+back);

//use backslash to ignore singe quote
let s1 = 'I\'m a string!';
console.log("use backslash= "+s1);

let st="I'am Aditya";
let st1='I am "Aditya"';
let st2='I\'am Aditya';
let st3="I am \"Aditya\"";
let st4=`I'am Aditya from "Pune"`;

console.log(st);
console.log(st1);
console.log(st2);
console.log(st3);
console.log(st4);