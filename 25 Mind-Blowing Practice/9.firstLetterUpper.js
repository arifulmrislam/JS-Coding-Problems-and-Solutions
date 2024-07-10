// Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

const sentence = 'welcome to my sweet home';

function firstLetterUpperCase(sentence){
    
    let capSplit = sentence.split('').map((word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capSplit.join('');
}

console.log(firstLetterUpperCase(sentence));