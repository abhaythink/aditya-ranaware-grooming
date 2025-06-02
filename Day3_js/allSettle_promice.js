const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 resolved"), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p2 rejected"), 5000);
});

Promise.allSettled([p1, p2])
.then((message)=>console.log("then execute in all condition",message))
.catch((message)=>console.log("catch execute in all condition",message));

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     console.log("Get user from the database.");
//     console.log(userId);
//     setTimeout(() => {
//       resolve({
//         userId: userId,
//         username: "john",
//       });
//     }, 1000);
//   });
// }

// function getServices(user) {
//   return new Promise((resolve, reject) => {
//     console.log(`Get services of  ${user.username} from the API.`);
//     console.log(user);
//     setTimeout(() => {
//       resolve(["Email", "VPN", "CDN"]);
//     }, 2 * 1000);
//   });
// }

// function getServiceCost(services) {
//   return new Promise((resolve, reject) => {
//     console.log(`Calculate service costs of" ${services} ".`);
//     setTimeout(() => {
//       resolve(services.length * 100);
//     }, 3 * 1000);
//   });
// }

// getUser(100).then(getServices).then(getServiceCost).then(console.log);


//note- each fnction return value is pass to the next function as a parameter