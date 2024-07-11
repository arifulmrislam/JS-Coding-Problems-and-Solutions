// Write a js program to find the most frequent item of an array. 

function freq(arr){
    var obj = {};
    arr.forEach(function(elem){
        if(obj.hasOwnProperty(elem)) obj[elem]++;
        else obj[elem] = 1;
    })
    var ans = Object.keys(obj).reduce(function (acc,cur){
        return obj[acc] > obj[cur] ? acc : cur;
    })
    console.log(ans);
}
freq([1,2,3,4,1,2,6,8,9,10,189,44,44,5,6,1,1,2]);