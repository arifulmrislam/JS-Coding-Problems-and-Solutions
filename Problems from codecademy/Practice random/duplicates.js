/* Duplicates */

const duplicates = (num) => {
    var result = [];

    for (let i = 0; i < num.length; i++) {
        if (num.indexOf(num[i]) !== i ) {
            result.push(num[i]);
        }
    }
    return result;
}

console.log(duplicates([2, 2, 3, 4, 6, 5, 8, 9, 8, 7,7,9]));