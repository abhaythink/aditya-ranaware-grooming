let add=(a,b)=>{
    return a+b;
};
//let add=(a.b)=>a+b;

console.log(add(7,8));

let numbers=[8,4,5,7,6,9,4,2,5,21,36,11];
//sort using anonymos function in ascending order
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);

//sort using arrow function in decending order

numbers.sort((a,b)=>b-a);
console.log(numbers);

let square=a=>a*a;
console.log(square(4));


//find length of each string in array
let  names=['adi','raj','shyam','tushar'];
let nlength=names.map((a)=>a.length);

for(let i=0;i<names.length;i++){
console.log("length of "+names[i]+" is "+nlength[i]);
}

//create object
let setColor=color=>({value:color});

console.log(setColor('blue'));
