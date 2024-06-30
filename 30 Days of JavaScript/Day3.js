/*
function displayInformation() {
    // var library is defined, use it to print the information
    for(let lib in library){
        if(library[lib].readingStatus === false){
            console.log("You still need to read '"+library[lib].title+"' by " +library[lib].author+".");
        }else{
            console.log("Already read '"+library[lib].title+"' by " +library[lib].author+".");
        }
    }
}

// tail starts here
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();
*/

//Find the largest Number in an Array

const array = [2,3,4,6,-1,0,9,8,5];

function getLargestNumber(arr){
    let largest = arr[0];
    // for(let i=0;i<array.length;i++){
    //     if(arr[i] > largest){
    //         largest = arr[i];
    //     }
    // }
    // console.log(largest);
    arr.forEach((num)=>{
        if(num > largest){
            largest = num;
        }
    });
    console.log(largest);
}
getLargestNumber(array);