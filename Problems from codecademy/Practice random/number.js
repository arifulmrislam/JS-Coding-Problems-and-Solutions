// function SimpleEvens(num){
//     var str = num.toString();
//     for(var i=0;i<str.length;i++){
//         if(Number(str[i]%2 !=0)) return false;
//     }
//     return true;
// }

// console.log(SimpleEvens(readline()));


// function DashInsert(str){
//     if(str % 2 !== 0){
//         return str;
//     }
// }
// console.log(DashInsert(2222));

/* function DashInsert(str){
    let str = str.toString();
    let result = str[0];

    for(let i = 1; i < str.length; i++){
        if(str[i] % 2 !== 0){
            result += '_' + str[i];
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(DashInsert(56730));  // Output: 2-2-2-2 */





/* function OneDecremented(str) {
    str = str.toString();
    let result = str[0];
    let count = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i] > str[i + 1]) {
            console.log(str[i]);
            count++;
        } else {
            result += str[i];
        }
    }
    // code goes here  
    return count;

}

// keep this function call here 
console.log(OneDecremented((9876541110))); */


/* function Superincreasing(arr) {
    arr = arr.toString();
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i + 1]*2 > arr[i]) {
            return true;
        } else {
            return false;
        }
    }
}

// keep this function call here 
console.log(Superincreasing(([1,2,5,10]))); */

function ChangingSequence(arr) {


    for (var i = 0; i < arr.length; i++) {

        if (arr[0] < arr[1]) {  // increasing pattern
            if (arr[i] > arr[i + 1]) {
                return i;
            }
        }

        if (arr[0] > arr[1]) {  // decreasing pattern
            if (arr[i] < arr[i + 1]) {
                return i;
            }
        }
    }

    return -1;

}

// keep this function call here 
console.log(ChangingSequence([5, 4, 3, 2, 10, 11]));

