//get arguments with writing parameter list

console.log(add(8,9));


function add()
{
    
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
} 

let sum=add(4,5,8,6,1);
console.log(sum);
