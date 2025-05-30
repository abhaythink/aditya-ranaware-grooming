const record1=new Promise((resolve,reject) => {
    resolve("video 1 recorded")
}) 
const record2=new Promise((resolve,reject) => {
    setTimeout(()=>{    
    resolve("video 2 recorded")
    },2000)
}) 
const record3=new Promise((resolve,reject) => {
    resolve("video 3 recorded")
}) 

Promise.all([
record1,
record2,
record3
])
.then((msg)=> console.log(msg))
.catch((msg)=> console.log(msg))


//note- all call then block only when methods inside all only returns resolve()
//if any method return reject() then only that method execute catch block
//all return output only after execution of  all funtions inside all completed