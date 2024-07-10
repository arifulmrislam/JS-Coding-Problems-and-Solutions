// How to empty an array in JavaScript.

const arr = [1,2,3,4,5,6];

function emptyArray(arr){
    arr.length = 0;
    return arr;
}

console.log(emptyArray(arr));