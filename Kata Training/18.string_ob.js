// Method of string object.. concat(), split(), join():

// const str1 = 'Hello Bangladesh!';
// const str2 = 'I want to live here until my death.';

// const str3 = str1.split('');
// // const str4 = str3.join('');
// console.log(str3);
/*
splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
*/

// Task:
function X(string, separator){
function X(string, separator){
    var str1 = string.split(' ');
    var str2 = string.split('');
    var str3 = string.split(separator);
    var str = [str1,str2,str3].join('');
    return str;
}
}

console.log(X('My name is John'));