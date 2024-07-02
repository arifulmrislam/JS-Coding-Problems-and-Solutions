

// Remove extra spaces from a sentence

// @Input '     Welcome         to      Codepravah  '
// @Output 'welcome to Codepravah'

function removeExtraSpaces(sentence){
    return sentence.replace(/\s+/g,' ').trim();
}

console.log(removeExtraSpaces("     Welcome         to      Codepravah  "));