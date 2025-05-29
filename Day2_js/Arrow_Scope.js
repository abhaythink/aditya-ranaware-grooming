class message{

    constructor(msg){
        this.msg=msg
    }
    
printMessage(){

setTimeout(()=>{
    let msg="Hi";
    console.log("from print message "+msg);
    console.log(this.msg);
},0)
}

printMsg(){
    
    setTimeout(function(){
    let msg="Hello";
    console.log("from print Msg "+msg);
    console.log(this.msg);
},100)
}
}
let mes=new message("Welcome");
mes.printMessage();
mes.printMsg();

//note - Anonymous function not refer to this values when we used anonymous function as paramter 
//Arrow function get value of this variable when used as a paramter for another function
 