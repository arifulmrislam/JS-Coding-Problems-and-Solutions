/* Write a function createHelloWorld. It should return a new function that always returns "Hello World". */

var createHelloWorld = function() {
    // return () => "Hello World";
    return function(...args){
        return "Hello World";
    }
};