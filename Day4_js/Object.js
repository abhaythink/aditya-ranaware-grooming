
let favoritesubject='Math'
let name='Aditya'
let student={
    firstname : name,
    lastname : "Ranaware",
    'blood group' : 'B+',
    [favoritesubject] : 98,
    greet : function(){
        return 'Good morning'
    },
    getFullName : function(){
        return this.firstname+" "+this.lastname;
    }
}

console.log(student.firstname)
console.log(student.lastname)
console.log(student["blood group"])
console.log(student[favoritesubject])
console.log(student['firstname'])
console.log(student.greet())
console.log(student.getFullName())
//add new property
student.age=22;
console.log(student.age)


// update property

student.age=25
console.log(student)

//delete property

delete(student.age)


console.log(student.age)
