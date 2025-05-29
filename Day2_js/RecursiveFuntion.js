//print countdown
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(10)

//print nature numbers 0 to 10
function natural(num){
    if(num<=1){
        return num;
    }
    return num+natural(num-1);
}
console.log("sum=",natural(10));