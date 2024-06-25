// task:
// function take 2 parameters
// *str*
// find the times of pad the string

function padIt(str, n){
    let i=1;
    do{
        if(i % 2 === 1){
            str = "*" + str;
        }else{
            str = str + '*';
        }
        i++;
        n--;
    }while(n>0)
        return str;
}

console.log(padIt(5,5));