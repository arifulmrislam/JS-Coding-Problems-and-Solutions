// Write a JS function that checks whether a passed string is palindrome or not

const str = 'Madam';

function isPalindrome(str){
    var result = '';

    for(var i=str.length-1;i>=0;i--){
        result += str[i];
    }
    if(str.toLowerCase() === result.toLocaleLowerCase()){
        console.log("It's Palindrome");
    }else{
        console.log("!not");
    }
}

isPalindrome(str);