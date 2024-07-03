
// count weekends(Sat & Sun) in a date range

// @Input       "2024-05-01", "2024-05-31"
// @Output      8

function countWeekends(startStr, endStr){
    var start = new Date(startStr);
    var end = new Date(endStr);
    var count = 0;
    while(start <= end){
    
        if(start.getDay() === 6 || start.getDay() === 0){
            count++;
        }
        start.setDate(
            start.getDate() + 1
        );
    }

    console.log(count);
}
countWeekends("2024-05-01", "2024-05-31");