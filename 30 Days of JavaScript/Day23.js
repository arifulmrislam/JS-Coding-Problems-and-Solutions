
// Print all intermediate dates

// @Input "2024-05-05", "2024-05-15"
// @Output All dates in between

function printIntermediateDates(startStr, endStr){
    // Parse the input string into 'Date' objects
    var start = new Date(startStr);
    var end = new Date(endStr);
    const newArray = [];

    //use a 'while' loop to generate the intermediate dates
    while(start <= end){
        newArray.push(new Date(start));
        start.setDate(start.getDate() + 1);
    }
    for(let i=0;i<newArray.length;i++){
        //print each date in the 'newArray' in 'YYYY-MM-dae
        console.log(newArray[i].toISOString().split('T')[0]);
    }
}

printIntermediateDates("2024-05-05", "2024-05-15");