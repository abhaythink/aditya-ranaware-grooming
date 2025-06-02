const p1 = new Promise((resolve, reject) =>
  setTimeout(() => reject("p1 failed"), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("p2 succeeded"), 4000)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("p3 succeeded"), 2000)
);

// Promise.race() returns first settled promise (success or failure)
Promise.race([p1, p2, p3])
  .then((result) => console.log("Race result:", result))
  .catch((error) => console.log("Race caught:", error)); 

// Promise.any() returns first fulfilled promise (only success not failure)
Promise.any([p1, p2, p3])
  .then((result) => console.log("Any result:", result)) // Will show 'p2 succeeded'
  .catch((error) => console.log("Any caught:", error));

//In any() if all promises are rejected then it will return aggregate error
