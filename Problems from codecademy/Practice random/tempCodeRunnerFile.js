function DashInsert(str){
    let str = str.toString();
    let result = str[0];

    for(let i = 1; i < str.length; i++){
        if(str[i] % 2 !== 0){
            result += '_' + str[i];
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(DashInsert(56730));  // Output: 2-2-2-2