var num = 1;

while(num < 101){
    console.log('Inside the loop', num);
    num +=1;
    if(num === 50){
        break;
    }
}console.log('Outside the loop');

