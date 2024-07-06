const arr = [5, 1, 3, 2, 6];

// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map((x) => {
//     return x.toString(2);
// });

// console.log(output);

// const output = arr.reduce((x,y) => {
//     return x+y;
// })

// console.log(output);


const users = [
    {firstName: 'akshay', lastName: 'saini', age:26},
    {firstName: 'donald', lastName: 'trump', age:75},
    {firstName: 'elon', lastName: 'musk', age:50},
    {firstName: 'deepika', lastName: 'padukone', age:26},    
];

// const namedUsers = users.filter((x) =>x.age <= 26).map(x => x.firstName + ' ' + x.lastName);

const output = users.reduce((acc,cur)=>{
    if((cur.age) <= 30){
        acc.push(cur.firstName);
    }
    return acc;
},[]); 

console.log(output);