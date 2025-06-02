let fruits = ["mango", "banana", "straberry"];
let [f1, f2, f3] = fruits;

console.log(f1, f2, f3);

let arr = [4, 5, 2, 4, 6, 7];
//rest syntax
let [a, b, c, ...restNumbers] = arr;

console.log(a, b, c);
console.log(restNumbers);

//add elements of arr and return result
function add(a, b, c, ...restN) {
  let sum = a + b + c;
  for (let a of restN) {
    sum += a;
  }
  return sum;
}
console.log(add(8, 7, 5, 4, 6, 4, 5));

//Spread Syntax
let arr2 = [5, 6, 8, 2, 4, 3];

//merging two arrays into one
let newarr = [...arr, ...arr2];
console.log(newarr);


console.log(add(...arr2)) // assign one by one elemnt to paramters
console.log(add(2,5,5,...arr2,4,6))


//object 
let user={
    id:123,
    username:'admin',
    password:'asdfjg'
}
let userinfo={
    email:'admin@gmail.com',
    city:'pune',
    country:'india'
}

// merge both information from one array 
let userall={...user,...userinfo}
console.log(userall);

// also pass default values

let userAll={...user,...userinfo,age:20}
console.log(userAll)