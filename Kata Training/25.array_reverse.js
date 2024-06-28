

var arr = [1, 1, 1, 2, 2, 2, 3, 3, 3];

// arr.sort((a,b)=>{
//     if(a%2 == b%2) return a-b;
//     if(a%2 > b%2) return -1;
//     return 1;
// })

// console.log(arr);

function sortIt(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.sort((a, b)=>b-a)
    }
    return arr;
}

console.log(sortIt(arr));