// task
// write a for loop with condition
// if condition full fill then it will ignore the next step

// const arr = [-10,20,30,55,76,100];
// function findFirstOddNumber(){
//     var result;
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]<0) continue
//         console.log(arr[i]);
//     }
// }

// console.log(findFirstOddNumber(arr));

// task:
// function has one parameter called doll
// use for loop, break and continue

function grabDoll(dolls){
    var bag = [];
    for(var i=0;i<=dolls.length;i++){
        if(dolls[i] !== 'Hello Kitty' || doll[i] !== 'Barbie doll'){
            continue;
        } 
        bag.push(dolls[i]);
        
        if(bag.length === 3){
            break;
        }
    }
    return bag;
}