//make this happen,
//input [1,2,3,4,5]
//output [1,2,3,4,5,1,2,3,4,5];

function duplicate(arr){
    console.log(arr.concat(arr));
}

duplicate([1,2,3,4,5]);