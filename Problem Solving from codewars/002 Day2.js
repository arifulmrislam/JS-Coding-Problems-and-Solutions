/* Create a function that returns the sum of the two lowest 
positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
*/

const num = [19, 5, 42, 2, 77];

const arr = function(numbers){
    var arrs = numbers.sort((a,b)=>a-b).slice(0,2);
    console.log(arrs[0] + arrs[1]);
    // console.log(arrs.join());
}
arr(num);