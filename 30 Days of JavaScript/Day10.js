// Return a new array with even numbers

// @Input [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// @Output [ 2, 4, 6, 8, 10]

function evenArray(number){
    var evenNum = [];
    // const evenArray = number.filter((ele)=>{
    //     return ele%2 === 0;
    // })
    for(let i=0;i<number.length;i++){
        if(number[i]%2 === 0){
            evenNum.push(number[i]);
        }
    }
    return evenNum;
}

console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));