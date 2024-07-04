

var arr = [1, 2, 3, 4, 5];

var result = arr.map(x =>x*x).reduce((a,b,i,ar)=>a.concat(ar[i],arr[i]),[]);

console.log(result);