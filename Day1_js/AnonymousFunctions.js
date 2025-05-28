
// anonymous function store in variable for later call 
let show = function(){
    console.log("welcome to Javascript");
}
show();

//Anonymous function pass as parameter  
setTimeout(function(){
    console.log('run after 2 sec')
},2000);

//directly declare and call anonymous function 
(function(){
    console.log("call directly without storing in variable");
})();

//call anonymous function by passing parameter

let person={
    fname:"Aditya",
    lname:"Ranaware"};

(function(){
    console.log("Welcome "+person.fname+" "+person.lname);
})(person);
