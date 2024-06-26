// task
// find the shortest string length
// using slice(), substring(), substr() method

const arr = ["ab", "cde", "fgh"];
function cutIt(arr){
    let shortString = arr[0].length;
    for(var i of arr){
        if(i.length <= shortString){
            shortString = i.length;
            // console.log(shortString);
        }
    }
    var arr2 = arr.map((x) => x.slice(0, shortString))
    return arr2;
}


console.log(cutIt(arr));