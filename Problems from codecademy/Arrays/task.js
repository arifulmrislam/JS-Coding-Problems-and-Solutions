let marks_class_12 = [91, 82, 63, 84, false, 'Not Present'];
for(let i=0; i<marks_class_12.length; i++){
    console.log("Array", marks_class_12[i]);
}


// let num = [1,2,3,4,5];
// let num_1 = [1,2,3,4,5];

/* let b = num.toString();
console.log(b, typeof b);

let c = num.join(" _ ");
console.log(c, typeof c);

// let r = num.pop();
let r = num.push(56);
console.log(num); */

// let b = num.concat(num_1);
// console.log(b);

// console.log(num [0]);

/* Function and array */

/* const flowers = ['peony', 'daffodil','marigold'];

const addFlower = (add) => {
    add.push('lily');
}

addFlower(flowers);
console.log(flowers); */


/* Nested Arrays */


/* var vacationSpots = ['London', 'NYC', 'Dallas'];

let i=0;
for(i;i<vacationSpots.length;i++){
    console.log('I would love to visit ' + vacationSpots[i]);
} */


/* const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];

for(let i=0;i<myArray.length;i++){
    for(let j=0;j<yourArray.length;j++){
        if(myArray[i] === yourArray[j]){
            console.log('Both arrays have the numbers ' + yourArray[j]);
        }
    }
} */


/* const bobsFollowers = ['Arif', 'Nusrat', 'Jamal', 'Kamal'];
const tinasFollowers = ['Arif', 'Nusrat', 'Mahbub'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}
console.log(mutualFollowers); */



/* for(let counterOne=1;counterOne <4; counterOne++){
    console.log(counterOne);
}

let counterTwo = 1;
while(counterTwo <4){
    console.log(counterTwo);
    counterTwo++;
} */



/* const firstMessage = 'I will print';
const secondMessage = 'I will not print';

do {
    console.log(firstMessage)
} while(true === false);

while(true === false){
    console.log(secondMessage);
} */