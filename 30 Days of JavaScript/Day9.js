// convert a number from decimal to binary.

// @Input 13
// @Output 1101

function decimalToBinary(num){
    if(num === 0) return '0';

    let binary = '';

    while(num){
        //get the remainder of division by 2
        const remainder = num % 2;
        // add remainder in beginning of result
        binary = remainder + binary;
        // update the number by integer division
        num = Math.floor(num / 2);
    }
    return binary;
}
const binary = decimalToBinary(13);
console.log('Binary is : ', binary);