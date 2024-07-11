// Loop an array and add all members of it

const arr = [1,2,3,4,5,6,7];

function addArray(arr){
    var sum=0;
    // return arr.reduce((acc, cur)=> acc + cur,0);
    arr.forEach((elem)=>{
        sum = sum + elem;
    })
    return sum;
}

console.log(addArray(arr));