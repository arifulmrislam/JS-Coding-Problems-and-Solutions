// check two string are anagrams
// @Input Listen, Silent
// @Output true

function reArrangeLetters(string){
    return string.toLowerCase().split('').sort().join('');
}

function areAnagrams(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let r1 = reArrangeLetters(str1);
    let r2 = reArrangeLetters(str2);

    return r1 === r2;
}

console.log(areAnagrams("Listen", "Silent"));