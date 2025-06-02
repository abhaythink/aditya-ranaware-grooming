
globalThis.msg="Helo";
// class message{

//     constructor(msg){
//         this.msg=msg
//         return msg
//     }
    
printMessage(){
// let msg="Hi";
setTimeout(()=>{
    console.log("from print message "+this.msg);
    console.log(this.msg);
},0)
}

printMsg(){
    
    setTimeout(function(){
    // let msg="Hello";
    console.log("from print Msg "+globalThis.msg);
    console.log(globalThis.msg);
},100)
}
// }
// let mes=new message("Welcome");
printMessage();
printMsg();

//note - Anonymous function not refer to this values when we used anonymous function as paramter 
//Arrow function get value of this variable when used as a paramter for another function
 
// username.addEventListener('keyup', () => {
//   greeting.textContent = 'Hello ' + this.value;
// });