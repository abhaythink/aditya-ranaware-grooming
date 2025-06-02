const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 2 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject(20);
    }, 1 * 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});


Promise.any([p1, p2, p3])
    .then((message)=>console.log("then execute in any condition"+message))
    .catch((message)=>console.log("catch execute in any condition"+message));
