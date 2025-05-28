
// console.log(a);
// console.log(b);
// console.log(c);

// const a="hello";
// let b=1;
// var c=3;


/*
var b= 20;

function test(){    
    console.log("print a from funtion="+a);         //undefined--hoisted with undefined value and also accesible inside function scope only
    var a=10;
    console.log("print c from funtion="+c);         //undefined--hoisted with undefined value and also accesible inside function scope only
   
    console.log("access b Inside funtion="+b);      //20- access outside var value
    console.log("print a from funtion="+a);         //10
}
test();

// console.log("print a from funtion="+a);     // throw error a is not defined 
if(b==20){
    var c=32;                                   //declare inside block but accessible outside block
}
console.log("print b outside funtion="+b);      //20
console.log("print c from funtion="+c);         //32
*/

/*
let b= 20;
function test(){    
    // console.log("print a from funtion="+a);         //error--hoisted but not initialized and et cannot be accessible before declaration
    let a=10;
    b=30;
    console.log("access b Inside funtion="+b);      //20- access outside var value
    console.log("print a from funtion="+a);         //10
}
test();
let c=30;
//  console.log("print a from funtion="+a);     // throw error a is not defined because we can't access let ouside function-scope
if(b==20){
    c=32;                                    //declare inside block and not accessible outside block beacuse it is block-scoped
    console.log("print c from funtion="+c);         
}
console.log("print b outside funtion="+b);      //20
 console.log("print c from funtion="+c);         //error let cannot access outside block

*/


/*
const b= 20;
function test(){    
    // console.log("print a from funtion="+a);         //error--hoisted but not initialized and const cannot be accessible before declaration
    const a=10;
    console.log("access b Inside funtion="+b);      //20- access outside var value
    console.log("print a from funtion="+a);         //10
}
test();

//  console.log("print a from funtion="+a);     // throw error a is not defined because we can't access const ouside function-scope
if(b==20){
    const c=32;                                    //declare inside block and not accessible outside block beacuse it is block-scoped
console.log("print c from funtion="+c);         
}
console.log("print b outside funtion="+b);      //20
// console.log("print c from funtion="+c);         //error const cannot access outside block

*/