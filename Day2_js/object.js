//create object
// let person={
//     firstName:'Adi',
//     lastName:'Ranaware'
// }

//construtor function
function Person1(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

let person1=new Person1("Aditya","Ranaware");
let person2=new Person1("Raj","Shinde");

console.log(person1)
console.log(person2)
// console.log(person)

class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

let p1 = new Person('John', 'Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());
console.table(p1)