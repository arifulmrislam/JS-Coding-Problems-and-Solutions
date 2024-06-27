// task
// indexOf(), lastIndexOf(), search() method
/*
var str = 'Hello World!';
console.log(str.indexOf('o'));
console.log(str.lastIndexOf('l'));
console.log(str.search('o'));
*/ 

function firstToLast(srt,c){
    var firstIndex = str.indexOf(c);
    var lastIndex = str.lastIndexOf(c);

    const difference = lastIndex - firstIndex;

    if(lastIndex === -1 && firstIndex >=0){
        return 0;
    }else if(firstIndex === -1 && lastIndex === -1){
        return -1;
    }else{
        return difference;
    }
}