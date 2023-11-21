function howManySmaller(arr, n) {
    //coding here..
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        // var roundElement = parseFloat(arr[i].toFixed(2));
        if (roundElement < n) {
            count++;
        }
    }
    return count;
}