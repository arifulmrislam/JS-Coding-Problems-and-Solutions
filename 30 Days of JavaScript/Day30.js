
// Merge Array of Objects 
// @Input [{pet: 'Dog',age:3},{color: 'black'},{break: 'Labrador'}]
// @Output {pet: 'Dog',age:3,color:'black',bread:'Labrador'}

function mergeObject(arr) {
    let result = {};

    arr.forEach((obj) => {
        result = {
            ...result,
            ...obj,
        }
    });
    console.log(result);
}

mergeObject([{ pet: "Dog", age: 3 },{ color: "black" },{ break: "Labrador" },])