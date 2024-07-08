//Reverse an array using Map
// @input [1,2,3,4,5,6]
// @output [6,5,4,3,2,1]

const array = [1, 2, 3, 4, 5, 6];
// function reverseArrayUsingMap(array){
//     // return arr.map((_,index)=> arr[arr.length - 1 - index]);
//     const lastIndex = array.length - 1;
//     const result = array.map((item, i, arr)=>{
//         return arr[lastIndex - i];
//     });
//     console.log(result);
// }
// reverseArrayUsingMap(array);

function reverseArray(array){
    return array.map((_,index)=> array[array.length - 1 - index]);
    }


console.log(reverseArray(array));