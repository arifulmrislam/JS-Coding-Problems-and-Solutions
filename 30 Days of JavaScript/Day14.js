// Remove special characters

// @Input We^lco$me To$ Co@depravah*
// @Output Welcome To Codepravah

function removeSpacialChars(sentence) {
    // return sentence.replace(/[^\w\s]/gi, '');
    let result = '';
    for (let char of sentence) {
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            char === ' '
        ) {
            result += char;
        }
    }
    console.log(result);

}

console.log(removeSpacialChars("We^lco$me To$ Co@depravah*"));