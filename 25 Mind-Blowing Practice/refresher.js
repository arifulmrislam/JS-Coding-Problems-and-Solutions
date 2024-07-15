

// const array = 102;

// function emptyArr(num){
//     // return Number(arr.toString().split('').reverse().join(''));
//     var rev = 0;
//     while(num>0){
//         var rem = num%10;
//         rev = rev*10+rem;
//         num = Math.floor(num/10);
//     }
//     console.log(rev);
// }
// console.log(emptyArr(array));




// const number = 501;

// function reverse(num){
//     var rev = 0;
//     while(num>0){
//         var rem = num%10;
//             rev = rev*10+rem;
//         num = Math.floor(num/10);
//     }
//     return rev;
// }

// console.log(reverse(number));


// const text = 'LooL';
// function isPalindrome(text){
//     var str = text.split('').reverse().join('');

//     if(text === str){
//         console.log("It's palindrome");
//     }else{
//         console.log("It's not");
//     }
// }
// isPalindrome(text);




// const text = 'apple';

// function alphaOrder(str){
//     var word = str.split('').sort().join('');
//     console.log(word);
// }
// alphaOrder(text);




// const sentence = 'This is the way of solving problem';

// function UpperCase(str){
//     var str2 = str.toLowerCase();
//     return str2.replace(/\w\b/g,x=>x.toUpperCase());
// }

// console.log(UpperCase(sentence));


// const word = 'apple';

// function countWord(str){
//     var obj = {};

//     str.split('').map((elem)=>{
//         if(obj.hasOwnProperty(elem) === false){
//             obj[elem] = 1;
//         }else{
//             obj[elem]++;
//         }
//     })
//     console.log(obj);
// }

// countWord(word);



// var arr = [1,2,3,4,5,6,7];

// function sum(arr){
//     var sum =0;

//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sum(arr));



// const arr = ["hehehehe", 123, "arif", "heheheh", 2, 4, "dhaka"];

// function addNum(arr){
//     var sum = 0;
//     arr.forEach((elem)=>{
//         if(typeof elem === 'number'){
//             sum += elem;
//         }
//     })
//     return sum;
// }

// console.log(addNum(arr));



// var arr = [
//     {name: 'harsh', gender: 'male'},
//     {name: 'harsitha', gender: 'female'},
//     {name: 'abcd', gender: 'nonespecified'},
//     {name: 'harshi', gender: 'female'},
//     {name: 'arif', gender: 'male'},
// ]

// function removeObj(arr){
//     var count =0;
//     arr.filter((elem)=>{
//         if(elem.name !== 'arif'){
//             count++
//         }
//     })
//     return count;
// }

// console.log(removeObj(arr));





// const arr = [1,2,3,4,5];


// function cloneArr(arr){
//     var newArr = [];

//     arr.forEach((elem)=>{
//         newArr.push(elem);
//     })
//     return newArr;
// }

// console.log(cloneArr(arr));



// const arr = [1, 2, 3, 4, 5];

// function retrieveArr(arr,n){
//     if(arr.length > n){
//         for(let i=0;i<n;i++){
//             console.log(arr[i]);
//         }
//     }
// }

// retrieveArr(arr,3);


// function longestWord(str){
//     var words = str.split(' ');
//     var largest = words[0];

//     str.map((elem)=>{
//         if(elem.length > largest.length){
//             largest = elem;
//         }
//     })
//     console.log(largest);
// }

// const arr = [1, 2, 3, 4, 5];

// function reverse(arr){
//     return arr.map((elem,index)=> arr[arr.length - 1 - index]);
// }

// console.log(reverse(arr));


// const sentence = "This is the way of solving problem";

// function caseASentence(sentence){
//     return sentence.replace(/\b\w/g,x=>x.toUpperCase());
// }

// console.log(caseASentence(sentence));




// function vowelsCount(str){
//     const vowels = 'aeiouAEIOU';
//     var count =0;

//     for(let char of str){
//         if(vowels.indexOf(char) !== -1){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(vowelsCount("welcome to Codepravah"));


// function toBinary(str){
//     if(str === 0) return '0';

//     let binary = '';

//     while(str){
//         var remainder = str % 2;
//             binary = remainder + binary;
//             str = Math.floor(str / 2);
//     }
//     return binary;
// }
// console.log(toBinary(13));


// const num = 1234;

// function reverse(num){
//     var rev = 0;

//     while(num>0){
//         var remainder = num % 10;
//             rev = rev*10+remainder;
//         num = Math.floor(num / 10);
//     }
//     return rev;
// }
// console.log(reverse(num));


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function newArray(array){
//     // return array.reverse();
//     let start = 0;
//     let end = array.length -1;

//     while(start < end){
//         var temp = array[start];
//         array[start] = array[end];
//         array[end] = temp;

//         start++;
//         end--;
//     }
//     console.log(array);
//     }
// console.log(newArray(array));


// function swapCharters(string){
//     let swapString = '';

//     for(let char of string){
//         if(char === char.toUpperCase()){
//             swapString += char.toLowerCase();
//         }else{
//             swapString += char.toUpperCase();
//         }
//     }
//     console.log(swapString);
// }
// swapCharters("Welcome To Codepravah");



// function removeSpacialChars(sentence){
//     var res = '';
//     for(let char of sentence){
//         if((char >='a' && char <='z') || (char >='A' && char <='Z') || char === ' '){
//             res += char;
//         }
//     }
//     return res;
// }
// console.log(removeSpacialChars("We^lco$me To$ Co@depravah*"));



// function sortSentence(sentence){
//     let text = sentence.split(' ');

//     var sortestWord = text.sort(a,b)=> return a.length - b.length

// }

// console.log(sortSentence("Welcome To Codepravah"));


// function removeExtraSpace(sentence){
//     return sentence.replace(/\s+/g,' ').trim();
// }
// console.log(removeExtraSpace("     Welcome         to      Codepravah  "));


// function generateRGBColor(){

//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     return `RGB ${red},${green},${blue}`;
// }

// console.log(generateRGBColor());



// function shuffleArray(array){

//     for(let i=array.length-1;i>0;i--){
//         let r = Math.random();
//         let idx = Math.floor(r * (i+1));

//         let temp = array[i];
//         array[i] = array[idx];
//         array[idx] = temp;
//     }
//     console.log(array);
// }

// shuffleArray([1, 2, 3, 4, 5, 6]);



// function printCharFreq(str){
//     let obj = {};

//     for(let char of str){
//         if(obj[char]){
//             obj[char]++;
//         }else{
//             obj[char]=1;
//         }
//     }
//     return obj;
// }

// console.log(printCharFreq("mississippi"));