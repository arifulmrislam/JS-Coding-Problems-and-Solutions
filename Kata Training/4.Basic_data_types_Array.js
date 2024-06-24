// task
// create an array
// use given five function

var arr = [1,2,3,4,5];

var getLength = (value) => {
    return arr.length;
}
var getFirst = (value) => {
    return arr[0];
}
var getLast = (value) => {
    return value[arr.length-1];
}
var pushElement = (value) => {
    return arr.push(6);
}
var popElement = (value) => {
    return arr.pop();
}

console.log(getLength(arr));
console.log(getFirst(arr));
console.log(getLast(arr));
console.log(pushElement(arr));
console.log(popElement(arr));