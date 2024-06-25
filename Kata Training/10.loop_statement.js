// task:

// function sum1_100(){
//     var sum=0, num=1;
//     while(num<=100){
//         sum=sum+num;
//         num++;
//     }
//     return sum;
// }

// console.log(sum1_100());


// function sum1_100(){
//     var num=1;
//     for(var sum=0;num<=100;num++){
//         sum=sum+num;
//     }
//     return sum;
// }
// console.log(sum1_100());

// task:
// function parameter is arr
// arr is the array of number
// create two more black array for even and odd number.

const arr = [1,2,3,4,5,6,7,8,9,10];
var even = [];
var odd = [];
function pickIt(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }
}

pickIt(arr);