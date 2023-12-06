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


