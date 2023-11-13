// var foo = "hello";
// var bar = foo.concat(' World');
// console.log(bar);


// var foo = "Hello, World! How do you do?";
// console.log(foo.indexOf(' '));


/* for ( var i = 0; i < 7; i++) {
    setTimeout(function () {
        console.log(i);
}, 1000);
}

for ( let i = 0; i < 7; i++) {
    setTimeout(function () {
        console.log(i);
}, 1000);
}
 */

// console.log(math.random());

/* var meal = 'breakfast';
console.log(meal);

meal = 'lunch';
console.log(meal); */


/* var stopLight = "Yellow";

if(stopLight === 'Green' && pedestrians === 0){
    console.log('Go');
} else {
    console.log('stop');
} */


/* var sleep = true;
console.log(!sleep); */

/* let myVariable = 0;

if(myVariable) {
    console.log(myVariable);
}else {
    console.log('The variable does not exits');
} */

/* let numberOfApples = 1;

if (numberOfApples){
    console.log('Let us eat apples!');
} else {
    console.log('No apples left!');
} */


/* var isNightTime = true;

if(isNightTime){
    console.log('Time to sleep');
}else{
    console.log('Time to study');
}

isNightTime ? console.log('Time to sleep') :
console.log('Time to study');


let favoritePhrase = 'Love That!';

favoritePhrase !== 'Love That!' ? 
console.log('I love it'):
console.log('I hate this') */


/* let books = 'mathematics';
let name = 'math';

switch(books){
case 'physics':
	console.log(`The ${name} book price is $0.88`);
break;

case 'biology':
	console.log(`The ${name} book price is $0.85`);
break; 
default:
	console.log(`The ${name} book price is $0.90`);
break;

}  */  

/* Function */

/* function area(height, width){
    return area;
}

let megermant = 7 * 5;
console.log('House area ' + megermant); */



// console.log('area 1: ' + (area(5,5)));
// console.log('area 2: ' + (area(6,6)));
// console.log('area 3: ' + (area(5,7)));
// console.log('area 4: ' + (area(5,8))); */



// greetWorld();

/* function greetWorld(){
    console.log('Hello, World');
}

greetWorld(); */


/* function calculateAre(height, width){
    let calculate = height * width;
    console.log(calculate);
} */

// const rectWidth = 5;
// const rectHeight = 6;
// calculateAre(5,7);



// const monitorCount = function(rows, columns){
//     return rows * columns;
// }

// function costOfMonitors(rows, columns) {
//     return monitorCount(rows, columns) * 200;
// }

// const totalCost = costOfMonitors(5, 4);
// console.log(totalCost);


// function rectangleArea(width, height){
//     let area = width * height;
//     return area;
// }

// console.log(rectangleArea(5,7));

// rectangleArea = (width, height) => {
//     let area = width * height;
//     return area;
// }

// console.log(rectangleArea(5,7));

// rectangleArea = (width, height) => width * height;

// console.log(rectangleArea(5,7));


/* Scope */

/* function first(){
    var x = 1;
    console.log(x);
    function childOfFirst(){
        console.log(x);
    }
    childOfFirst();
}
first(); */


// const first=() =>{
//     let y = 1;
//     return y;
// }

// console.log(first());




/* var x = 10;
{
    var x = 1;
    console.log(x);
}

console.log(x);
 */


/* const sayHi = (name) => {
    let msg = 'Hi';
    return msg + name;
}

const sayBye = (name) => {
    let msg = 'Bye';
    return msg + name;
}

console.log(sayHi(' Arif'));
console.log(sayBye(' Nusrat')); */

// const longSkyColor = () => {
//     let color = 'blue';
//     // console.log(color);
// }

// console.log(color);

/* const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue" */
//   console.log(color); // throws a ReferenceError


const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);