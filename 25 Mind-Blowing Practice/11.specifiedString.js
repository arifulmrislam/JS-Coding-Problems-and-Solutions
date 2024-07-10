// write a javascript function to get the number of occurrences of each letter in specified string

const str = 'apple';

function specifiedString(str){
    var obj = {};

    str.split('').forEach((elem) =>{
        if(obj.hasOwnProperty(elem) === false){
            obj[elem] = 1;
        }else{
            obj[elem]++;
        }
    });
    console.log(obj);
}

specifiedString(str);