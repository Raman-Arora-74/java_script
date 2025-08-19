// primitive

// 7  type : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false 
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber  = 23037489379273047290927374290732098429073n
// if the integer is very large or any big value so on last of the value type n it cause that it tell this number comes under Bigint data type u can also tell like this Bigint(973948792794732)
console.log(typeof(bigNumber));

// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Raman",
    age: 17,
};
const myFunction = function(){
    a = "Hello from a";
    console.log("Hello world");
    return a;
}

console.log(typeof (myFunction))

