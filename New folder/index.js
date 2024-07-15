/* Write a function that takes a string and returns it reversed.
For example, reverseString('hello') should return 'olleh'. */


// const str = 'hello world';

// function reverseStr(str){
//     // console.log(str.split(''));
//     // return str.split('').reverse().join('');
//     var str2 = ''; 
//     for(let i=str.length-1;i>0;i--){
//         str2 += str[i];
//     }
//     return str2;
// }

// console.log(reverseStr(str));



/* Write a function that, given an array of numbers, adds all the even numbers and subtracts all the odd ones.
For example addEvenSubOdds([4, 5, 1, 10, 2]) --> 10 */

// const arr = [4, 5, 1, 10, 2];

// function  addEvenSubOdds(arr){
//     var even = 0;
//     var odd = 0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 === 0){
//             even += arr[i];
//         }else{
//             odd += arr[i];
//         }
//     }
//     return even - odd;
// }

// console.log(addEvenSubOdds(arr));

/* Write a function called power which takes in a base and an exponent.
If the exponent is 0, return 1. e.g. power(2, 4) -> 16
power(2, 3)-> 8 */


function power(base,exponent){
    if(exponent === 0){
        return 1;
    }else{
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 0));