/* var str="Hello beautiful World!";
console.log(str.slice(6,16))
console.log(str.substring(6,16))
console.log(str.substr(16))
 */

function firstToLast(str, c) {
    //coding here..
    var firstPos = str.indexOf(c);
    var lastPos = str.lastIndexOf(c);

    if (firstPos !== -1 && lastPos !== -1) {
        //     var gap = (lastPos - firstPos);
        //     return gap;
        if (firstPos === lastPos) {
            return 0;
        } else {
            return lastPos - firstPos;
        }
    }
        else {
            return -1;
        }
}

