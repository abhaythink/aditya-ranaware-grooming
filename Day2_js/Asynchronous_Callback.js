// function downloadImage(url){
// setTimeout(()=>{
// console.log("image downloading",url);

// },2000)

// }


// function ProcessImage(){
// console.log("image processing");
// }

// downloadImage("http://www.google.com");
// ProcessImage();

function downloadImage(url, callback) {
    console.log("Downloading image from", url);
    setTimeout(() => {
        let image = "img";
        console.log("Download complete");
        callback(image); 
        }, 2000); 
}

function processImage(image) {
    console.log("Processing image:", image);
}

downloadImage("image.jpg", processImage);
console.log("Other code runs while image is downloading...");
