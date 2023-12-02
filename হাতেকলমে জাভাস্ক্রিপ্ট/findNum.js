var a = 50;
var b = 20;
var c = 30;

// if(a > b && a > c){
//     console.log("a is bigger than b and c");
// }else if(b > a && b > c){
//     console.log("b is bigger than a and c");
// }else{
//     console.log("c is gater than a and b")
// }

/* (a > b && a > c) ? (c > b) ? console.log("a is bigger than b and c") : console.log("c is bigger than a and b") ? (b > c) : console.log("b is gater than a and c") : console.log('c is gater than b and a'); */

// if(a > b && a > c){
//     console.log('a is higher number');
// }else if(b > a && b > c){
//     console.log('b is higher num');
// }else{
//     console.log('c is higher number');
// }

// (a > b) ? (b >c ):console.log('c is higher number');

if(a < b){
    if(b < c){
        console.log("c is higher.")
    }else{
        console.log("b is higher number.")
    }
}else{
    console.log("a is higher.");
}