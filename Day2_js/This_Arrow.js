//this- used to refer current context/value
 
let username="Aditya"
    let user={
        username:"Adi",
        age:"24",
        email:"adityaranaware1301@gmail.com",
        welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`); //regfers current value inside object
        console.log(this)
        },
        HelloMessage : function() {
        console.log(`Hello, ${username} `);     //refers username value which is declare outside user object
        console.log(this)
    }
}

console.log(this)
user.welcomeMessage()
user.HelloMessage()
console.log(this)

// function demo(){
//     console.log(this)
// }
// demo()

//Arrow funtion -explicit return
let sum=(a,b)=>{
    return a+b;
}
console.log("sum=",sum(9,8))

//implicit return

let diff=(a,b)=>a-b
console.log("differece="+diff(8,4))

//directly call arrow function
let mult=(a,b)=> {
    console.log("mutiplication"+a*b);
};
mult(4,2)

//arrow function with one parameter
let square= digit=> digit*digit
console.log("square = "+square(2))