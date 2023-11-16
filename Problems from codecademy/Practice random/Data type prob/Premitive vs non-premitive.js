//Premitive vs Non-premitive
//Premitive type data we can't modify because, it's by default.
//Non-premitive type for example, object, loop, array, function, we can change there index value. 

var myCity = 'Dhaka';
myCity[0] = 'T';

console.log('myCity=>', myCity);

var numbers = [10, 20, 30];
numbers[0] = 5;
console.log('Numbers=>',numbers);