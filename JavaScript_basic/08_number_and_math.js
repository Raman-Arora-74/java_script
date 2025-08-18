const score = 500 
console.log(score);

const balance = new Number (100)
console.log(typeof(balance));
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.9823

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'))

// ***************************** Maths ****************************

console.log(Math); // object

// To make a number positive use abs

console.log(Math.abs(-4)); // 4

// To make number round off 

console.log(Math.round(5.3)); // 5

// to make number round off and use which one is choose lower or higher 
// to choose higher use ceil
console.log(Math.ceil(2.3)) // 3 

// to choose lower if the number exceed the 0.5 

console.log(Math.floor(2.6)) // 2 

console.log(Math.min(4,3,3,2,3,35,6,421,23,34)) // 2 

// random in math 

// random is use to make a random number between 0 - 1 

console.log(Math.random());

// To make a number which is lai betwen 1 to 10 Do 

console.log(((Math.random()*10)+1).toFixed(0));

const min = 10 
const max = 20 
console.log(Math.floor(Math.random()*(max-min+1))+min);