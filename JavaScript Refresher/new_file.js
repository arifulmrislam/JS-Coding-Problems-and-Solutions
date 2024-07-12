
// const arr = [1.234,1.235,1.228]
// const n = 1.24;

// function howManySmaller(arr, n){
//     var count = '';
//     for(let elem of arr){
//         if(elem.toFixed(2) < n){
//             count++;
//         }
//     }
//     console.log(count);
// }
// howManySmaller(arr,n);




// const arr = ["abc", "cd", "fgh"];

// function shortestArr(arr){
//     var res =arr[0];
//     for(let elem of arr){
//         if(elem.length < res.length){
//             res = elem.length;
//         }
//     }
//     var arr2 = arr.map((x)=> x.slice(0, res))
//     return arr2;
// }

// console.log(shortestArr(arr));





// function firstToLast(str, c){
//     var res1 = str.indexOf(c);
//     var res2 = str.lastIndexOf(c);

//     var difference = res2 - res1;

//     if(res2 === -1 && res1 >=0){
//         return 0;
//     }else if(res1 === -1 && res2 === -1){
//         return -1
//     }else{
//         return difference;
//     }
// }

// firstToLast('ababc','c');



// const text = 'My name is John';

// function splitAndMerge(string, separator) {
//     const words = str.split(' ');
//     const arr = [];

//     for(let i=0;i<words.length;i++){
//         arr.push(words[i].split('').join(separator))
//     }
//     return arr.join(" ");
// }


// var str = 'this is an example';

// function firstLetterCapital(str){
//     var words = str.split(' ');
//     console.log(words);
//     var capitalize = words.map((elem)=>{
//         return elem[0].toUpperCase()+elem.slice(1);
//     })
//     return capitalize.join(' ');
// }
// console.log(firstLetterCapital(str));


// var str = '          a   n     ';
// // var result = str.replace(/\b\w/g,x=>x.toUpperCase());
// var result = str.toUpperCase().replace(/\w\b/g,x=>x.toLowerCase());

// console.log(str.trim());
// console.log(result);

// var s = '       I       love          my          country     ';


// var r = s.replace(/\s/g,'');
// console.log(r.split('').join(' '));




// function mul(a,...b){
//     for(let i=0;i<b.length;i++){
//         b[i]*=a;
//     }
//     return b;
// }

// console.log(mul(2,1,1,1));





// const shuffleIt = (arr, ...num) => {
//   for ([a, b] of num) [arr[a], arr[b]] = [arr[b], arr[a]];
//   return arr;
// };

// console.log(shuffleIt([1, 2, 3, 4, 5], [0, 4], [1, 3]));

// var originalArray = [[1, 2, 3],[4, 5],];

// var newArr = originalArray.slice();

// console.log(originalArray);
// console.log(newArr);

var arr = [1, 2, 10, 4, 50, 6,250];
var arr2 = ["a", "c", "b"];
function threeInOne(arr){
    var result = [];
    arr.filter((elem)=>{
        if(elem >= 40){
            result.push(elem);
        }
    })
    console.log(arr.indexOf(4));
    return result.concat(['Hello Sum']);
}

console.log(threeInOne(arr));