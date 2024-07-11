// in an array of numbers and strings, only add those members which are not strings

const arr = ['hehehehe', 123, 'arif','heheheh',2,4,'dhaka'];

function arrSum(arr){
    var sum = 0;
    arr.forEach((elem)=>{
        if(typeof elem === 'number'){
            sum = sum + elem;
        }
    })
    return sum;
}

console.log(arrSum(arr));