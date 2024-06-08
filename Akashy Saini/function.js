// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }
outer();
a();
//Function statement
function outer(){
    console.log("outer is called");
}
outer();
//Function expression
var a = function inner(){
    console.log("Inner function");
}
a();
//Function Declaration
// Anonymous function

// Name function expression
// Different between parameters and arguments?
// First class function
// Arrow functions
