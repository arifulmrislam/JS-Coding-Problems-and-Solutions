

var num1 = [1,2,3,4,5,6];


function threeInOne(arr){
    var res=[];
    for(var i=0;i<arr.length;i+=3){
        // console.log(i);
        res.push(arr[i] + arr[i+1] + arr[i+2]);
    }
    return res;
}

console.log(threeInOne(num1));
