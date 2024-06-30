/* Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). */

// function createCounter(n) {
//     return function(){
//         return n++;
//     }

// }

/* if(marks>90){
    console.log("AA");
}else if(marks>80 && (marks<90 || marks===90)){
    console.log("AB");
}else if(marks>70 && (marks<80 || marks===80)){
    console.log("BB");
}else if(marks>60 && (marks<70 || marks===70)){
    console.log("BC");
}else if(marks>50 && (marks<60 || marks===60)){
    console.log("CC");
}else if(marks>40 && (marks<50 || marks===50)){
    console.log("CD");
}else if(marks>30 && (marks<40 || marks===40)){
    console.log("DD");
}else{
    console.log("FF");
} */




/* 
function printObjectProperty(myObject) {
    //Write your code here

    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    _input = "";
    process.stdin.on("data", function (input) {
        _input += input;
    });

    process.stdin.on("end", function () {
        var obj = _input.split(' ');
        var myObject = new Object;

        // Fill up the question marks
        myObject.type = 'Fiat',
        myObject.model = 500,
        myObject.color = 'White';


    });
    console.log(myObject.type);
    console.log(myObject.model);
    console.log(myObject.color);
} 



function printObjectProperty(myObject) {
    //Write your code here
    var car = {
        type:myObject.type,model:myObject.model,color:myObject.color
    }
    console.log(car);
}
*/


//a string is Palindrome or not

function reverse(text){
    let reverseText = '';
    for(let i=text.length-1;i>=0;i--){
        reverseText += text[i];
    }
    return reverseText;
}

function isPalindrome(text){
    const reversString = reverse(text);

    return reversString === text;
}

console.log(isPalindrome('racecar'));