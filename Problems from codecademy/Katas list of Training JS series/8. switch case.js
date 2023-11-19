function howManydays(month) {
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
}