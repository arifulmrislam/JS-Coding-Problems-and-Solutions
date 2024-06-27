

// var str = 'my name is John';
// var words = str.split(' ');

// for(var i=0;i<words.length;i++){
//     words[i] = words[i].replace(words[i][0],words[i][0].toUpperCase());
// }

// // console.log(result);
// console.log(words.join(" "));

// var str = 'my name is john';
// var result = str.replace(/\b\w/g, x=> x.toUpperCase());

// console.log(result);

// function alienLanguage(str){
//     var result = str.replace(/\b\w/g,x=>x.toUpperCase());
//     return result;
// }

// console.log(alienLanguage('my name is john'));

function alienLanguage(str){
    var words = str.split(' ');
    for(var i=0;i<words.length;i++){
        var lastLetter = words[i].length - 1;
        words[i] = words[i].substring(0, lastLetter).toUpperCase() + words[i][lastLetter].toLowerCase();
    }
    return words.join(' ');
}

console.log(alienLanguage("Hello World"));

