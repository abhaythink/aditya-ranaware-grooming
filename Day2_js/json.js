//javaScript Object Notation
let companies=[
    {
        "name": "Thinkitive",
        "numberOfEmployees" : 200,
        "ceo" : "Ganesh Varahade",
        rating : 5.0
    },
    {
        "name": "Thinkitive1",
        "numberOfEmployees" : 225,
        "ceo" : "Ganesh Varahade",
        "rat ing" : 4.0
    }
];

console.log(companies);
console.log(typeof companies);


//convert json to string
let companie=`[
    {
        "name": "Thinkitive",
        "numberOfEmployees" : 200,
        "ceo" : "Ganesh Varahade",
        "rating" : 5.0
    },
    {
        "name": "Thinkitive1",
        "numberOfEmployees" : 225,
        "ceo" : "Ganesh Varahade",
        "rating" : 4.0
    }
]`;

console.log(companie)
console.log(typeof companie)
//convert string to object using parse function
let comps=JSON.parse(companie)
console.log(comps)
console.log(typeof comps)


//get first company name from above json
console.log(comps[0].name)



/*
note:
1.while creating object double quotes for key not mandatory only if key contain single word or joined key without space.
2. while convert string to object every key is rounded with double quotes
if not then it throws error Invalid or unexpected token.
*/