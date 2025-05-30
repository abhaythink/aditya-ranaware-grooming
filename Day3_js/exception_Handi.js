let user=false;
let a=new Promise((resolve,reject)=>{
if(user){
    resolve("user found")
}
else{
    reject("user not found")
}

})

a.then((message)=>console.log("then execute in all condition",message))
.catch((message)=>console.log("catch execute in all condition",message))


//cannot use try catch in promise . .catch is used for error handling
//if we got error in promise then it will go to .catch block not by catch()
