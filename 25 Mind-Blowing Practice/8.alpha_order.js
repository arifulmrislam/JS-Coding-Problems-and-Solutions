// write a javascript function that returns a passed string with letters in alphabetical order


function alphaOrder(text){
    return text.split('').sort().join('');
}

console.log(alphaOrder('Bangladesh')); // Output: "aaBdeghlns"

