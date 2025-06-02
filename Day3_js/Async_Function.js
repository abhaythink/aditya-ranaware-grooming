function sayHi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("welcome 1");
      resolve("Aditya");
    }, 3000);
  });
}

function sayHi2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("welcome 2");
      resolve("Aditya");
    }, 3000);
  });
}
async function sayHi3() {
 return new Promise((resolve,reject)=>setTimeout(() => {
      console.log("welcome 2"); 
      reject("By")
    }, 3000));
    
}
async function display() {
  try{
  let result = await sayHi3();
  console.log(result);
    let result1 = await sayHi2();
    console.log(result1);
    let result2 = await sayHi();
    console.log(result2);
  }
  catch(error)
  {
    console.log("Error Occures"+error)

  }
}
display();

// function getData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Data");
//     }, 3000);
//   });
// }

// async function display() {
//   const result = await getData(); // waits here
//   console.log(result); // prints "Data"
// }

// display();
