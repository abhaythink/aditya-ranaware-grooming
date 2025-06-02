Promise.resolve().then(()=> console.log(1));// go to microtask

setTimeout(()=> console.log(2),1);  //go to webApi --> task queue


queueMicrotask(()=>{                //goto microtask
    console.log(3)
    queueMicrotask(()=>{            //go to microtask
        console.log(6)
        setTimeout(()=> console.log(8),1); //go to webapi->task queue
    })

})

console.log(5);     // execute first



//note first execute all code line by line ---if promise /await/async funxtions are occurs all go to microtask
// async funtions go to web Api ... after execution done go to task queue
// after line by line execution done --- event loop first check microtask queue .. if he got task then microtasks run firstly
//when call stack and micro task totally empty then task queue tasks are run by event loop
// after each task complete in task queue , event loop check for microtask queue