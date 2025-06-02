let p = new Promise((resolve, reject) => {
  let a = 1 + 3;

  if (a == 2) {
    resolve();
  } else {
    reject("Failed");
  }
});

p.then(
  () => {
    console.log("This is in then")
  },
  (msg) => {
    console.log("OnRejected")
    console.log(msg)
  }
).catch((message) => {                 //catch not called if state of promise get rejected
  console.log("This is in the catch"+message)
})
.finally(()=>{
   console.log("finally block")
})
.finally(()=>{
   console.log("second finally block")
})
.finally(()=>{
   console.log("third finally block")
})

//finally()-execute block at any state if it's  resolve or rejected





//note- if we use onRejected in then when reject() called. then onRejected get called and catch is ignored.
//then support both onFulfilled and onRejected  -- then(onFulfield,onRejected)
//catch only support onRejected -- catch(onRejected)