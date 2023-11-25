/* Task 01
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false */

var isSquare = function(n){
    //n is higher or equal than 0.
    if(n >= 0){
        let N=Math.sqrt(n); //make sqrt root using Math() function.
        
        let num = Math.round(N);//using Math.round() to get solid integer.
        console.log(num);
        if((num*num) == n){  //if given number is qual with num.
            return true;
        }
    }
    return false;
}

console.log(isSquare(1));
