// // var a = ["", "a", "ab", "aba", "abab", "ababa"];

// // var b = a.filter(x=>{
// //     if(x.length <2) return true;

// //     var y= x.split('').reverse().join('');
// //     return x==y;
// // })

// // console.log(b);

// var arr = [1,1,1,2,2,3,4,4];

// function count(arr,n){
//     return arr.filter(x=>x==n).length;
// }

// console.log(count(arr,2));

const arr = [50,60,70,80,90,95,100];

function countGrade(scores){
    let grades = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
    var b = scores.filter(x=>{
        if(x===100){
            grades.S +=1;
        }else if(x<100 && x>=90){
            grades.A += 1;
        }else if(x<90 && x>=80){
            grades.B += 1;
        }else if(x<80 && x>=60){
            grades.C += 1;
        }else if(x<60 && x>=0){
            grades.D += 1;
        }else if(x===-1){
            grades.X += 1;
        }
    })
    return grades;
}

console.log(countGrade(arr))