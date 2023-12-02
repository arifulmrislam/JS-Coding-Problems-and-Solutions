/* var str = 'hello';
var count = '';
function reversed(str){
    for(let i = str.length-1;i>=0;i--){
        count += str[i];
    }
    return count;
}
console.log(reversed(str));
 */


var str = 'hello';
var count = '';

function reversed(str){
    for(let i=0;i<str.length;i++){
        count += str[i];
        var jii = count.split('').reverse().join('');
    }
    return jii;
}

console.log(reversed(str));