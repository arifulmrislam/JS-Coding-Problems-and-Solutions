/* function showObjectKeys(obj){
    for(var key in obj){
        console.log(key);
    }
}

function showObjectValues(obj){
    for(var key in obj){
        console.log(obj[key]);
    }
}

var ob = {item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("Show Object Key");
showObjectKeys(ob);
console.log("values of ob");
showObjectValues(ob); */


function giveMeFive(obj) {
    //coding here
    var arr = [];
    for (var key in obj) {
        if (key.length === 5) {
            arr.push(key);
        } if(obj[key].length === 5){
            arr.push(obj[key]);
        }
    }
    return arr;
}