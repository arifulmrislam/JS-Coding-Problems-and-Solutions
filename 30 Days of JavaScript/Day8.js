// count the number of vowels
// @Input: 'welcome to Codepravah'
// @Output: 8

// a,e,i,o,u

function countVowels(sentence){
    const vowels = 'aeiouAEIOU';

    let vowelsCount = 0;

    for(let char of sentence){
        if(vowels.indexOf(char) !== -1){
            vowelsCount++;
        }
    }
    return vowelsCount;
}

console.log(countVowels('welcome to Codepravah'));