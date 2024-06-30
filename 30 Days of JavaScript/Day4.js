//Find a longest word in a sentence.

function longestWord(str){
    let words = str.split(' ');
    let largest = words[0];
    
    words.map((word)=>{
        if(word.length > largest.length){
            largest = word;
        }
    })
    console.log(largest);
}

longestWord('Welcome to Codepravah');