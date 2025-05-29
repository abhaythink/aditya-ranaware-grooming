

//Synchronous Callback function with error handling

function downloadImage(url,callback,callback2){
console.log("image downloading",url);
url ? callback() : callback2(url);
// callback();
}

function failure(url){
    console.log("Invalid Url",url);
}

function ProcessImage(){
console.log("image processing");
}

// downloadImage('',ProcessImage,failure);
downloadImage('www.google.com',ProcessImage,failure);
