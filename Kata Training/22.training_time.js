

// var str = 'ababab';
// const str2 = (str.replace(/a/g,x=>x.toUpperCase()));

// console.log(str2);


// function plus(a,b,c,d,e){
//     return a+b+c+d+e;
// }

// const arr1 = [1,2,3,4,5];
// const arr2 = [2,3];
// console.log(plus(...arr1));
// console.log(plus(1,...arr2,4,5));


function plus(...num){
    var result=0;
    for(let i of num) result += i;
    return result;
}

console.log(plus(1,2,3,4,5));