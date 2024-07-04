
const arr = [11, 22, 33, 33, 22, 11];

function pairOfMirrorImage(arr){
    for(let i=0;i< arr.length;i++){
        let num1 = arr[i].toString();
        let num2 = arr[i+1].toString();
        let reverseNum2 = num2.split('').reverse().join('');
    
        if(num1 === reverseNum2){
            return [arr[i],arr[i+1]];
        }
    }
    return -1,-1;
}

console.log(pairOfMirrorImage(arr));