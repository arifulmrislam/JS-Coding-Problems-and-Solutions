// swap the case of each character in a string

// @Input Welcome To Codepravah
// @Output wELCOME tO cODEPRAVAH

function swapCharacters(string) {
    let swapString = '';

    for (const char of string) {
        if (char === char.toUpperCase()) {
            swapString += char.toLowerCase();
        } else {
            swapString += char.toUpperCase();
        }
    }
    console.log(swapString);
}

swapCharacters("Welcome To Codepravah");