
// Print frequencies of each character

// @Input mississippi
// @Output i:4, m:1, p:2, s:4

function printCharFreq(str){
    // Create an empty object to store frequencies
    var frequencies = {};

    // Loop through each character of string
    for(let char of str){
        // Check if the characters is already
        // in the frequency object
        if(frequencies[char]){
            frequencies[char]++;
        }else{
            frequencies[char] = 1;
        }
    }
    return frequencies;
}

console.log(printCharFreq('mississippi'));