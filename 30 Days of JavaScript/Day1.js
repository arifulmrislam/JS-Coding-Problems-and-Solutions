/* Write a function createHelloWorld. It should return a new function that always returns "Hello World". 

var createHelloWorld = function() {
    // return () => "Hello World";
    return function(...args){
        return "Hello World";
    }
};
*/

//Reverse and print a given string
// @input "codepravah"
// @output "havarpedoc"

const str = 'codepravah';
function reverse(str){
    var str2 = '';
    // var str2 = str.split('').reverse().join('');
    for(let i=str.length-1;i>=0;i--){
        str2 += str[i];
    }
    return str2;
}
console.log(reverse(str));
// reverse(str);