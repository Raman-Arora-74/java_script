
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}

// sayMyName()

// function addition(numberOne,numberTwo){
//     Total = numberOne + numberTwo;
//     return Total;
// }

// console.log(addition(10,20));
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }
function loginUserMessage(username = "Guest"){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage())