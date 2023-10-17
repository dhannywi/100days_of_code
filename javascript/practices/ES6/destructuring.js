/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {studentname, age, projects} = student
// further destructure nesting object
// const { name, age, projects: { diceGame } } = student;

console.log(`${studentname} is ${age} years old developer.
 His recent project, ${Object.keys(projects)}, can be described as ${Object.values(projects)}.`)

/* 
Destructure arrays the same way
*/

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(lastName)