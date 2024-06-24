// task:
// write a function
// parameter n
// n is the number of hotdogs
// calculate the price of hotdog

function saleHotdogs(n){
    return n<5 ? 100*n : n >=5 && n<10 ? n*95 : n>=10 ? 90*5 : 0;
}