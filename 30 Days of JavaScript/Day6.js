// Reverse a given sentence
// @input "welcome to Codepravah"
// @Output "Codepravang to welcome"

const str = "welcome to Codepravah";

function reverseSentence(str){
    return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence(str));