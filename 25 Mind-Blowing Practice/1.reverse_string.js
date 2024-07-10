// Given a string, reverse each word in the sentence

// input: Harsh bhai kaise ho
// output: hsraH iahb esiak oh

const str = "Harsh bhai kaise ho";


function reverseWord(str){
    var words = str.split(' ');
    var reverse = words.map(word =>{
        return word.split('').reverse().join('');
    })
    return reverse.join(' ');
}

console.log(reverseWord(str));