// 45 JavaScript Hacks
/*
// Short-circuit evaluation
const isLoggedIn = false;
const user = isLoggedIn && {name: 'Jane', age:25};
console.log(user);

// Optional chaining
const user = {profile: {name: 'Jane'}};
const userName= user?.profile?.name;
console.log(userName);

// Nullish Coalescing
const user = {name:'', age:0};
const userName = user.name ?? 'Anonymous';
const userAge = user.age ?? 18;
console.log(userName);
console.log(userAge);

//Object Property shorthand
const name = 'Jane';
const age = 25;
const school = 'school'
const user = {name, age,school};
console.log(user);

// Dynamic property Names
const propName = 'age';
const user = {name:'Jane', [propName]: 25};
console.log(user);

// Array 'map()', 'filter()','reduce()'
const numbers = [1,2,3,4,5,6];
const double = numbers.map(num => num * 2);
console.log(double);
const evens = numbers.filter(num => num %2 === 0);
console.log(evens);
const sum = numbers.reduce((total, num) => total + num,0); 
console.log(sum);

// String 'include', 'startsWith()',and 'endsWith()'
const str = 'Hello, world!';
console.log(str.includes('world'));
console.log(str.startsWith('Hello'));
console.log(str.endsWith('!'));

// Array and Object Destructiong in Function Parameters
const user = {
    name: 'Jane',
    age: 30,
    education: 'MIT',
    degree: 'Master',
}

// function greet(){
//     for(var value in user){
//         return `Hello ${user.name}! You are ${user.age} years old.`
//     }
// }
// console.log(greet());

function greet({name,age,education}){
    return `Hello ${name}! Congratulation for your ${education} degree.`
}

console.log(greet(user));
*/
