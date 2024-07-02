// Find the largest difference between two consecutive numbers in an array

// @Input [ 2, 10, 1, 8, 4, 6 ]
// @Output 9(10 - 1)

function largestDifference(array){
    let smallest = array[0];
    let largest = array[0];

    for(let i = 0;i<array.length;i++){
        // console.log(array[i]);
        if(array[i] > largest){
            largest = array[i]; 
        }else if(array[i] < smallest){
            smallest = array[i];
        }
    }
    return largest - smallest;
}

console.log(largestDifference([2, 10, 1, 8, 4, 6]));