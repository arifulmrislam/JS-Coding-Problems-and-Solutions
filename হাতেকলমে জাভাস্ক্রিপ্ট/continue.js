var num = 0;

while(num < 20){
    num += 1;
    if(num === 5){
        console.log(num + "is skipped");
        continue;    
    }
    console.log("The number is", num);
}