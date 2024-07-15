// Given a string, reverse each word in the sentence

// input: Harsh bhai kaise ho
// output: hsraH iahb esiak oh

// const str = "Harsh bhai kaise ho";


function reverseWord(str){
    var words = str.split(' ');
    var reverse = words.map(word =>{
        return word.split('').reverse().join('');
    })
    return reverse.join(' ');
}

console.log(reverseWord(str));




// const sentence = "The Way Of Love";
const arr = [1,2,3,4,5,6,7];

// way:1 to reverse the sentence;
function reverse(str){
    return arr.reverse();
}
// way2: to reverse each word
// function reverseWord(str){
//     var words = str.split(' ');
//     var reverseWords = words.map((word)=>{
//         return word.split('').reverse().join('');
//     })
//     return reverseWords.join(' ');
// }

console.log(reverse(arr));