// if 
// const isUserLoggedIn = true
// const temperature = 41;

// if (!isUserLoggedIn) {
//     console.log("print('Hello World')");
// }

// if (temperature === 41) {
//     console.log("less than 50");
    
// }else{
//     console.log("temperature is greater than 50");
//     ;
    
// }
// // < , > , <= , >=, == ,!= , ===

// // === and == 
// if (2 == "2") {
//     console.log("executed");
    
// }

// if (2 === "2") {
//     console.log("executed");
    
// }
// const score = 200 
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);   
// };
// console.log(`User power: ${power}`)

const balance = 1000 
// if (balance > 500) console.log("test"),console.log("test.2"),console.log();

if (balance > 500) {
    console.log(`Less then 500`);
    
}else if (balance > 750) {
    console.log("Less then 750");
    
}else if (balance > 900) {
    console.log("Less then 900");
}
const loggedInFromGoogle = false
const loggedInFromEmail = true 
const userLoggedIn = true 
const debitCard = true 
if (userLoggedIn && debitCard) {
    console.log("both are true")
};
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
