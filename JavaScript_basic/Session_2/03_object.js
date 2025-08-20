// singleton 
// Object.create
// Object literals 

const mySym = Symbol("Key1")
const jsUser = {
    name: "Raman",
    age: 16,
    [mySym]: "Key1ofjs",
    "full name":"RamandeepSingh",
    location: "Jaipur",
    email: "raman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.greeting  = function(){
    console.log("hello Js User");
}

jsUser.greeting2  = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

