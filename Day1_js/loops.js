if('')
    console.log("welcome");
else
    console.log("NO");

 //nested for loop

 let a=3;
 if(a==3){
    console.log("condition true");
 }else if(a==2){
    console.log("condition 2 true");
 }   
 else{
    console.log("false")
 }
//ternary operator
 let out= a==4?"good":"bad";
 console.log(out);
//ternary operator in ternary operator
 let speed =70;
 let result= speed>=120?'Toofast':speed>=80?"fast":"ok";
 console.log(result);


//switch statement

let day=27;
if(day==27){      //loose equality compare only value
    console.log("good");
}else{
    console.log("bad");
}
//switch uses strict comaprison
 switch(day){
 case 1:
    console.log("good");
    break;

 case 27:
    console.log("not good");
    break;
case 9:
    console.log("bad");
    break;
default:
    console.log("very bad");
}


let year = 2016;
let month = 2;
let dayCount;
if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
   } 
else {
      dayCount = 28;
   }
console.log(dayCount);
//iterating array using while loop
let msg = ['Hi', 'Hello', 'welcome'];
let i = 0;
while (i < msg.length) {
  console.log(`${i + 1}.${msg[i]}`);
  i++;
}


//for loop with label

outer:for(let i=0;i<5;i++){
   for(let j=0;j<5;j++){
      if(i+j > 2)
         break outer;
      console.log(i+" "+j);
   }
}