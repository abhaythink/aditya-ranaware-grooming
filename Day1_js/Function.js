function say(message){
    if(!message){
        return;
    }

    console.log(message);
}
say();

//return values in the form of array
function multi(){
    let fname='Aditya';
    let lname='ranaware';

    return [fname,lname];
}

let out=multi();
console.log(out);
//get value using index
console.log(out[0]+" "+out[1]);
console.log(typeof out);


//return multiple values in object
function getName(){
    let fname='Adi';
    let lname='Ranaware';

    return{
        'firstname': fname,
        'lname': lname
    }
}

let name1=getName();
console.log("name="+name1.firstname+" "+name1.lname)

//simple way to create array
function getMyName(){
    let fname='Aditya';
    let lname='Ranaware';

    return {fname,lname}
}

let name2=getMyName();
console.log("name="+name2.fname+" "+name2.lname)


//destructing Objet

let {fname :fn,lname:ln}=getMyName();
console.log(fn+" "+ln);
