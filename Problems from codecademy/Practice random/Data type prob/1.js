/* let numeric = 100;
let string = 'Think more about future goal and study';
let boolean = true;

console.log(typeof numeric);
console.log(typeof string);
console.log(typeof boolean); */

/* //Global variables
var sum1=10;
var sum2=20;

//Function that accesses global variables
function add(){
    return sum1 + sum2;
    
}

//Call the function and log the result
const sum = add();
console.log(sum); */

// function blockScopeExample() {
//     let localVar = 'I am local';


//     for (let i = 0; i <= 3; i++) {
//         console.log('Inside the for loop: ', i);
//         console.log('Accessing localVar inside the for loop:', localVar);
// }

//     console.log('Accessing localVar outside the for loop: ', localVar);
// }

// blockScopeExample();



/* let person = {
    'name': 'Ariful Islam',
    'age': 28,
    'profession': 'Software Engineer'
};

console.log(person.name);
console.log(person.age); */

// let dynamicVariable = 42;

// console.log('Initial Type', typeof dynamicVariable);


// dynamicVariable = 'Hello, World!';

// console.log('Updated Type', typeof dynamicVariable);


/* const pi = 3.1416;
const radius = 5;

let area = pi * radius ** 2;
let formattedArea = area.toFixed(2);
console.log('Area:',formattedArea); */

/* let num1 = 3**2;
let num2 = 2;

console.log(num1 % num2); */

/* let i = true;
let a =0;
let b =0;
let c =0;

i == true ? (a++,b++,c++):((a=0),(b=0),(c=0));

console.log('a=', a,'b=', b,'c=',c); */

let i = true;
let a = 0;
let b = 0;
// This implementation will fail
i == true ? (a++, b++) : (a = 0, b = 0);
console.log('a = ', a, 'b = ', b);