const name = "Raman"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// new is use to make string to object 

const gameName = new String('Ramanhc');


console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('R'));


const newString = gameName.substring(0,6);
console.log(newString)

const anotherString = gameName.slice(-8,6)
console.log(anotherString)
const newStringOne = "\n     Raman    "
console.log(newStringOne.trim());

const url = "https://raman.com/raman%20arora"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'))
console.log(gameName.split('a'));
