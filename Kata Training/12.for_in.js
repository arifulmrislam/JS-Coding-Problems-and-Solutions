// var ob = { 
//     item1: "This", 
//     item2: "is", 
//     item3: "an", 
//     item4: "example" 
// };

// function showArrValue(ob){
//     for(var key in ob){
//         console.log(`${key}:${ob[key]}`);
//     }
// }
// showArrValue(ob);

// var arr = ["one", "two", "three"];

// function showArrValue(arr){
//     for(var key of arr){
//         console.log(key);
//     }
// }
// showArrValue(arr);

//task:
// function name giveMeFive with one parameter obj
// create an array
// check each key and value
// key===5 then push
// value === 5 then push

function giveMeFive(obj){
    var arr = [];
    for(var key in obj){
        if(key.length === 5){
            arr.push();
        }if(obj[key] === 5){
            arr.push();
        }
    }
}