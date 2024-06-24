// task:
// function howManyDays
// 1 parameter case
// return the numbers of the day

function howManyDays(month){
    var month = 31;
    switch(month){
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        break;

        case 2:
            return 28;
        break 

        default:
            return 31;
    }
}

console.log(howManyDays());