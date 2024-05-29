const welcomeMessage = (name) => {
    console.log(`Welcome Mr. ` + name);

    return returnMenu = (menu) =>{
        console.log(`Do you like ` + menu + ` Mr. ` + name);
    }
}


const anotherVar = welcomeMessage;
anotherVar('Kali Mia') ('coffee');


const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.map ((item, index, fullArray) => {
    console.log(`Items: ` + item + ` Index: ` + index +` FullArray:` + fullArray );
});


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr2 = arr2.filter(filterItem => {
    return(filterItem % 2 == 0);
})
console.log(newArr2);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const someArr = arr2.some(item => {
    return(item === 10);
});

console.log(someArr);


const objSOme = [
    {
        name: 'Ariful',
        age: 30,
        job: 'software engineer'
    },
    {
        name: 'Soriful',
        age: 31,
        job: 'software engineer'
    },
    {
        name: 'Kamrul',
        age: 29,
        job: 'software engineer'
    }
]

const newObj = objSOme.some(anObj => {
    return anObj.age === 30;
})

console.log(newObj);


const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const everyArr = arr3.every(items =>{
    return typeof items === 'number';
})

console.log(everyArr);


var capitalName = {
    Bangladesh: 'Dhaka',
    India: 'Delhli',
    Nepal: 'Kathmandu',
    Thailand: 'Bangkok'
}


for(let name in capitalName){ 
    console.log(`Capital ${name} is: ` + capitalName[name]);
};



const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Math.max(...arr4));




const d = new Date();
console.log(d.getUTCFullYear());


const name = 'Ariful Islam';

console.log(name === 'Ariful Islam' ? 'He is genius' : 'He is failure');



let email = "Ariful.gmail";
const successFunc = () => {
    console.log('Got your email!');
}
email ? successFunc() : console.log('Please provide your email');


const objTer = {
    name: '',
    age: 29,
    job: 'Software Engineer'
}

objTer.name?console.log(`Name is ${objTer.name} and age ${objTer.age}`):console.log('He has nothing to say');



const mText = 'ABCDEFGHIJK abcdefghijk\n\t0123456789!@#$%^&()';
console.log((mText.match(/\0/g)));

const qText = 'aaaabcdefghij0123456666789';
console.log(qText.match(/6/g));


const regexp = (/ab/g);
let match;
while(match = regexp.exec('abcdef')){
    console.log(match);
}


try{
    console.aula('This is an error');
} catch(err){
    console.log('Do anything here');
    console.log(err);
}



const ageNew = 17;
try{
    if(ageNew < 18) {
        throw new Error = ('You are too young');
    } else {
        console.log('You are adult');
    }
} catch(err){
    console.log(err);
}