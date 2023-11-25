// const plantNeedsWater = (day) => day === 'Wednesday' ? true : false;


// const n = 2;

var isSquare = function(n){
    if(n >= 0){
        let N=Math.sqrt(n);
        
        let num = Math.round(N);
        console.log(num);
        if((num*num) == n){
            return true;
        }
    }
    return false;
}

console.log(isSquare(1));