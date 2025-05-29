//for..in with Object
var person = {
    firstName: 'Adi',
    lastName: 'Ranaware',
    mobile: 299242351
};

for(var prop in person) {
    console.log(prop ,':', person[prop]);
}

//for...in with Array

Array.prototype.abc = 100;
const items=[10,50,60,20,30]
let total=0

for(let prop in items){
    console.log(prop, items[prop])
    total+=items[prop];
}

for(let prop of items){
    console.log(prop, items[prop])
    total+=items[prop];
}


console.log(total);