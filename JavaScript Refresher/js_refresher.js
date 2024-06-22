"use strict";
/*
for(var i = 0; i < 7; ++i){
    setTimeout(function(){
        console.log(i);
    },1000);
}

for(let i = 0; i < 7; ++i){
    setTimeout(function(){
        console.log(i);
    },1000);
}


const myObj = {
    foo: 'bar'
};

myObj.foo = 42;
myObj.home = 'Dhaka';

console.log(myObj);


let planet = 'Mercury';

switch (planet){
    case 'Mercury':
    case 'Venus':
        console.log('Too hot here.');
    case 'Earth':
        console.log('Welcome home!');
        break;
    case 'Mars':
        console.log('Welcome to the other home!');
        break;
    case 'Jupiter':
    case 'Saturn':
    case 'Uranus':
    case 'Neptune':
    case 'Pluto':
        console.log('You may get gold here.');
        break;

    default:
        console.log('Seems you found another planet.');
        break;
}


for(var i=0;i<=10;i++){
    console.log(i);
}

var name = {
    first: 'Johnny',
    last: 'B.'
};

for(var key in name){
    if(name.hasOwnProperty(key)){
        console.log(key, name[key]);
    }
}


let numbers = [-1, 7, 42, 64];
for(let num of numbers){
    console.log(num);
}


var country = 'Bangladesh';
for(let letter of country){
    console.log(letter);
}

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

var i = 0;

do{
    ++i;
    console.log(i);
}while(i < 10);

var foo = 'Hello';
var bar = foo.concat(' World!');
console.log(bar);


var foo = 'Hello';
console.log(foo.length);


var foo = 'Hello World! How do you do?';
console.log(foo.lastIndexOf(' '));


var foo = 'foo bar foo bar foo';
var newString = foo.replace('bar', 'New!');
console.log(newString);


var foo = '     This line has unnecessary spaces.';
console.log(foo.trim());


var foo = 'Bangladesh';
console.log(foo.charAt(3));

let country = 'Bangladesh';
console.log(country.replace(3));


let country = `We 
love 
Bangladesh`;
console.log(country);


const myObj = {
    f_name: 'Joni',
    l_name: 'toni',
    address: 'Dallas, TX',
    phone: {
        color: 'red',
        model: 'iphone-15',
    }
}

for(let key in myObj){
    console.log(myObj[key]);
}

console.log(Object.keys(myObj));


var addStaff = {
    name: 'Adder',
    sum(num1,num2){
        return num1 + num2;
    }
}

console.log(addStaff.name);
console.log(addStaff.sum(5,6));
 

function createAnimal(name, owner){
    return{
    name,
    owner,
    getInfo(){
        return `${this.name} is owned by ${this.owner}`
    },
    address: {
        street: '123 Main street',
        city: 'Pittsburgh'
    }
    };
}

// var sport = createAnimal('Sport', 'Dough');

// console.log(`${sport.getInfo()}`);

// console.log(`${sport.name} is at ${sport.address.street}`);

// console.log(`${Object.getOwnPropertyNames(sport).join(' ')}`);

var spot = createAnimal('Spot', 'Doug');

let {name, owner} = spot;
console.log(`Name: ${name}`);
console.log(`Owner: ${owner}`);

let {address} = spot;
console.log(`Address: ${address.street}`);


let favNumbs = [2.718, .5772, 4.6692];
let [chaos,,] = favNumbs;
console.log(`Chaos: ${chaos}`);

let [, ...last2] = favNumbs;
console.log(`2nd Num: ${last2[0]}`);

let val1 = 1, val2=2;
[val1, val2] = [val2, val1];
console.log(`Val2: ${val2}`);


let arr = ['Banana', 'Mango', 'Pineapple', 'Orange'];

const myFunction = function(value){
    console.log(value);
}

arr.forEach(myFunction);
arr.push('Malta');
console.log(arr);


let arr1 = Array.of(1,2,3);
arr1.splice(1,1)
console.log(arr1);

let arr2 = Array.from(arr1, (value) => value*2);

console.log(arr2);

console.log(arr1.concat(arr2));


var abc = ['a','b','c'];
var a = abc.join('');
console.log(a);

var abc2 = a.split(",");
console.log(abc2);
*/

var abc = ["a", "b", "c"];

const myFunction= abc.forEach((value) => {
    console.log(value);
})

for(let key of abc){
    console.log(key);
}