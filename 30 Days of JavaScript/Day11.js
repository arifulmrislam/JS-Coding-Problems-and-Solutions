// Reverse an array without using another array

// @Input [ 1, 2, 3, 4, 5 ]
// @Output [5, 4, 3, 2, 1 ]

function reverseArray(array){
    // return array.reverse();
    let start = 0;
    let end = array.length -1;

    while(start < end){
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }
    console.log(array);
}

reverseArray([ 1, 2, 3, 4, 5 ]);