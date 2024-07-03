// Convert an Array to Object

// @Input ['apple', 'banana', 'orange']
// @Output {0:'apple', 1:'banana', 2:'orange'}

function arrayToObject(array){
        // return {...array};
        //Initialize an empty object
        // to store the result

        const obj = {};

        array.forEach((item, index) =>{
            obj[index] = item;
        })
        return obj;
}

console.log(arrayToObject(["apple", "banana", "orange"]));