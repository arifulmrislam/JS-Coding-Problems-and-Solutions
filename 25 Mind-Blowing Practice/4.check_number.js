// How would you check if a number is an integer?

const num = 12;

function checkNumber(num){
    console.log(Number.isInteger(num));
    // // Check if the number is an integer
    // if (num % 1 === 0) {
    //     console.log('Integer');
    // } else {
    //     console.log('Not an integer');
    // }
}

checkNumber(num); // Output: Integer
