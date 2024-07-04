// Reverse keys and values of Object

// @Input: {one: 1, two: 2, three: 3}

// @Output: {1: one, 2:two, 3:three}

function reverseKeyValues(object){
    const result = {};

    // Iterate over the object
    Object.keys(object).forEach((key) => {
        const value = object[key];
        result[value] = key;
    })
    console.log(result);
}

reverseKeyValues({ one: 1, two: 2, three: 3 });