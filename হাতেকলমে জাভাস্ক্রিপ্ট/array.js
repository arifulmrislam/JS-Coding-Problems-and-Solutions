// var arr = "My name is Ariful Islam Arif";

// // var arr2 = arr.indexOf("is");
// // console.log(arr2);

// for(let i=0;i<arr.length;i++){
//     console.log(arr);
//     // if(i ===0){
//     //     break;
//     // }
//     // if(arr[i] === ' '){
//     //     continue;
//     // }
//     // console.log('index of',arr[i] +' '+'is'+' '+ i);
// }


function aFunc(a){
    console.log('Before changing the property: ' + a.one);
    a.one = 'two';
    console.log('After changing the property', a.one)
}
var a = {
    one : "one"
}
aFunc(a);
console.log(a.one);
