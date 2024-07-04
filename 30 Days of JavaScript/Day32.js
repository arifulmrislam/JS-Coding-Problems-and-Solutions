// Object to array of pairs

// @Input  {pet: 'Dog', age:3, color: 'red'};
// @Output (['pet', 'Dog'], ['age',3], ['color','red']);


function objectToArray(obj){
    // Initialize an empty array
    // to store the pairs
    const array = [];

    // Iterate over the keys of object
    Object.keys(obj).forEach((key) =>{
        const pair = [key, obj[key]];
        array.push(pair);
    })
    return array;
}


console.log(objectToArray({pet: 'Dog', age:3, color: 'red'}));