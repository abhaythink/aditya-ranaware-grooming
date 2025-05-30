// let userleft = false;
// let subscribe = true;

function d(userleft, subscribe) {
  return new Promise((resolve, reject) => {
    if (userleft) {
      reject("userleft");
    } else if (subscribe) {
      resolve("Already subscriber");
    } else {
      resolve("please subscribe Our channel");
    }
  });
}

d(false, true)
  .then((msg) => {
    console.log("then1-", msg);
    return d(false, false);
  })
  .then((msg) => {
    console.log("then2-", msg);
    return d(true, false);
  })
  .catch((msg) => {
    console.log(msg);
  });

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 3000);
// });

// p.then((result) => {
//     console.log(result); 
//     return result * 2;
// }).then((result) => {
//     console.log(result); 
//     return result * 3;
// }).then((result) => {
//     console.log(result); 
//     return result * 4;
// });
