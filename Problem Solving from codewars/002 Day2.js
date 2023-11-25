/* Create a function that returns the sum of the two lowest 
positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
*/

const numbers = [19, 5, 42, 2, 77];

const arr = function(numbers){
    var arrs = numbers.sort((a,b)=>a-b).slice(0,2); //using sort function to make smallar to higher
    console.log(arrs[0] + arrs[1]); // add first two indexOf(arrs).
    // console.log(arrs.join());
}
arr(numbers);
