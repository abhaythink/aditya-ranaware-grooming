function multi(){
    let fname='Aditya';
    let lname='ranaware';

    return [fname,lname];
}

let out=multi();
let [fname,lname]=multi();
console.log(fname+" "+lname);


function getColors(){
    return ['blue','red','white','black','white'];
}

let [a,b,c,...etc]=getColors();

console.log(a);
console.log(b);
console.log(c);
console.log(etc);

// setting default values
let [fn1='Helo',ln1,ln2='Adiraj']=multi();
console.log(fn1,ln1,ln2);


//destrcting nested Array with default values

function getInfo(){
return[
    'Aditya',
    'Ranaware',
    [
        'red',
        'white',
        'yellow'
    ]
]

}
let[f1,l1,[c1,c2='NaN',c3,c4='black']]=getInfo();
console.log(f1,l1,c1,c2,c3,c4);

//swap values of let variable using destructing Array

let a1=10;
let b1=20;
console.log(a1,b1);

[a1,b1]=[b1,a1];
console.log(a1,b1);

//create function to find sum,average,difference between two numbers

function calc(a,b){
    return[a+b,a+b/2,a-b];

}
let [sum,avg,diff]=calc(15,5);

console.log("sum="+sum+" Average="+avg+" Difference="+diff);