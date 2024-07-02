// Title Case A Sentence
// @Input "welcome to codepravah"
// @Output "Welcome To Codepravah"

// task:
// Split sentence into array of words
// Capitalize first letter of each word 
// Join the tittle case word

const str = "welcome to codepravah";

function caseASentence(str){

    let capSplit =  str.split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });
    return capSplit.join(' ');
}

console.log(caseASentence(str));