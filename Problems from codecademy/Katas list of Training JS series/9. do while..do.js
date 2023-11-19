// const sum_100 = () =>{
//     var sum=0,num=1;

//     do{
//         sum+=num;
//         console.log(num);
//         num++;
        
//     }while(num<=10){
//     return sum;
//     }
// }

// sum_100();

const padIt = (str,n)=>{
    // n=10;
    let i=1;
    do{
        if(i % 2 === 1){
            str = '*'+ str;
        } else{
            str = str + '*';
        }
        i++;
        n++;
    }while(n>0){
    return str;
    }
}

padIt()