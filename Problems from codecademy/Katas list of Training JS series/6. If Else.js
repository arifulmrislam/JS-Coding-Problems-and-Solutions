function trueOrFalse(val) {
    if (val) {
        return 'true';
    } else {
        return 'false';
    }
}
/* 
Condition: This implementation uses the truthiness check directly in the if statement.
If val is truthy(i.e., not false, 0, null, undefined, NaN, or an empty string), 
it returns the string "true"; otherwise, it returns the string "false". */

const saleHotdogs = (n) => {
    return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
};