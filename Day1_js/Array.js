console.log('Array');
//creating array using constructor
let scores = new Array();
console.log(scores);
console.log("length of empty array"+scores.length);

//create array with size 10
let score = new Array(10);
console.log(score);
console.log("length of empty array with size "+score.length);

//create array with values
let data = new Array(9, 10, 8, 7, 6);
console.log(data);
console.log("length of empty array with size "+data.length);

//create array with one string value
let signs = new Array('Red');
console.log(signs);
console.log(signs.length)

//create array without using new keyword
let artists = Array();
// artists[0]="Hello";
console.log(artists);
console.log(artists.length)

//using [] create array
let colors = ['red', 'green', 'blue'];
console.log("Array using [] -  "+colors);
console.log(colors.length)

//accessing elements using index
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//change element at specific index
colors[2]="black";
console.log("after changing element using index- "+colors);

//add element at last
colors.push("gray");
console.log("array after push element-"+colors);

//add element at begining
colors.unshift("yellow");
console.log("array after unshift element-"+colors);

//remove last element from array
colors.pop();
console.log("array after pop element-"+colors);

//remove element from begining
colors.shift();
console.log("array after shift element-"+colors);

//find index of any element which are present
console.log("index of black element- "+colors.indexOf("black"));

let color="blue";
//check is array or not
console.log(Array.isArray(colors));
console.log(Array.isArray(color));
