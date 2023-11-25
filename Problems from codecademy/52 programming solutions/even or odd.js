/* function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:
const testString1 = "racecar";
const testString2 = "hello";

console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2));


 */


/* 
var fistCharacter = (str) => {
    return str.slice(0,1);
}

var lastCharacter = (str) => {
    return str.slice(-1);
}

var middleCharacter = (str) => {
    return str.slice(1,-1);
}

var isPalindrome = str => {
    if(str.length === 0 || str.length === 1){
        return true;
    }
    if(fistCharacter(str) !== lastCharacter(str)){
        return false;
    }

    return isPalindrome(middleCharacter(str));
}

console.log(isPalindrome('motor')); */






function ChangingSequence(arr) {


    for (let i = 0; i < arr.length; i++) {
        if (arr[0] < arr[1]) {
            if (arr[i] > arr[i + 1]) {
                return i;
            }
        }
        if (arr[0] > arr[1]) {
            if (arr[i] < arr[i + 1]) {
                return i;
            }
        }
    }
    return -1;
}