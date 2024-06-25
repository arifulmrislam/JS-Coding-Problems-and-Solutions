
function howManySmaller(arr, n) {
    //coding here..
    var count = 0;
    for(var i=0;i<arr.length; i++){
        if(arr[i].toFixed(2)<n){
            count++;
        }
    }
    return count;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));