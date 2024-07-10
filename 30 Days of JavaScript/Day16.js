
// SOrt the sentence
// on the basis of length of words

// @Input Welcome To Codepravah
// @Output To Welcome Codepravah

function sortSentence(sentence){
    var strSplit = sentence.split(' ');
    
    var shortestWord = strSplit.sort((a,b) =>{
        return a.length - b.length;
    })
    return shortestWord.join(' ');
}

console.log(sortSentence("Welcome To Codepravah"));