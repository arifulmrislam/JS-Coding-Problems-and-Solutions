/* Write a function createHelloWorld. It should return a new function that always returns "Hello World". 

var createHelloWorld = function() {
    // return () => "Hello World";
    return function(...args){
        return "Hello World";
    }
};
*/

//Reverse and print a given string

const str = 'codepravah';
function reverse(str){
    var str2 = str.split('').reverse().join('');
    return str2;
}
console.log(reverse(str));