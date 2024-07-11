// loop an array of objects and remove all objects which don't have gender's value male

var arr = [
    {name: 'harsh', gender: 'male'},
    {name: 'harsitha', gender: 'female'},
    {name: 'abcd', gender: 'nonespecified'},
    {name: 'harshi', gender: 'female'},
    {name: 'arif', gender: 'male'},
]

function newArr(arr){
    return arr.filter((elem)=> elem.gender === "male")
}

console.log(newArr(arr));