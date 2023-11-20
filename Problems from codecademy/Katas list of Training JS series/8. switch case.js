/* function howManydays(month) {
    var days;
    switch (days) {
        case 4: case 6: case 9: case 11:
            days = 30
        case 2:
            days = 28;
        default:
            days = 31;
    }
    return days;
} */





const weekDay = (day)=>{
    var today = ' ';
    
    switch(today){
        case 0:
            day = 'Today is Sunday';
            break;
        case 1:
            day = 'Today is Monday';
            break;
        case 2:
            day = 'Today is Tuesday';
            break;
        case 3:
            day = 'Today is Wednesday';
            break;
        case 4:
            day = 'Today is Thursday';
            break;
        case 5:
            day = 'Today is Friday';
            break;
        case 6:
            day = 'Today is Saturday';
            break;
        default:
            day = null;
    }
    return day
}

console.log(weekDay());