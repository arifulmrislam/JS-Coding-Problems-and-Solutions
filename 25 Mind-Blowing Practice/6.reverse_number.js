// Write a Javascript function that reverse a number

const num = 1212;

function reverseNum(num){
    // console.log(Number(num.toString().split('').reverse().join('')));
    var rev =0;
    while(num>0){
        var rem = num%10;
        rev = rev*10+rem;
        num = Math.floor(num/10);
    }
    console.log(rev);
}

reverseNum(num);