
const arr = [
    [1, 2],
    [3, 4],
    [5, 6],
];

function bigToSmall(arr){
    var result = [];
    for(let i = 0;i<arr.length;i++){
        result = result.concat(arr[i]);
    }
    
    console.log(result.sort((a,b) => b -a).join('>'));
}

bigToSmall([[1,2],[3,4],[5,6]]);


