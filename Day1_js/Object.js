console.log('JavaScript object');
//create object
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person);

//access properties
console.log(person.firstName);
console.log(person['lastName']);

//modify value of property
person.firstName='Jay';
console.log("modify first name= "+person.firstName);

//add new property
person.age=24;
console.log('Add new property, age= '+person.age);

//delete property
delete person.age;
console.log('after delete = '+person.age);

//checking if a property exists
console.log('age' in person);
console.log('firstName' in person);
