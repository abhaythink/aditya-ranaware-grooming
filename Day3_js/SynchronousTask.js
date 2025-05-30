//doing two tasks 1. downoad image and process on it.
//2.create print numbers from 0 to 10

function downloadImage(url){
    return new Promise((resolve,reject)=>{
        
    console.log("download image-----")
    setTimeout(()=>{
        console.log("downloading image from ", url)
        resolve("sucess");
    },1000)
    
    })
}

function processimage(){
    console.log("processing image");
}


function printNumbers(){
    console.log("printing Numbers")
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}


downloadImage("www.google.com").then((msg)=>{
    processimage()
    console.log(msg)
})
console.log("execution start line by line")
printNumbers()
