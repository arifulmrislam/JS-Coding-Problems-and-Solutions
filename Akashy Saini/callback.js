// what is a callback function in js

setTimeout(function(){
    console.log('Hello JS')
},5000);

function x(y){
    console.log("X");
    y();
}
x(function y(){
    console.log('y');
});