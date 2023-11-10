// for (let counter = 4; counter > 0; counter--){
//     console.log(counter);
// }


// function SimpleEvens(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }

// }

// // keep this function call here 
// console.log(SimpleEvens(10));

function WordCount(str) {
    // Split the string into an array of words using spaces as the delimiter
    const words = str.split(' ');

    // Return the number of words in the array
    return words.length;
}