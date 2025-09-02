const user = {
    username: "Raman",
    price: 999,
    WelcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
    console.log(this);
    }
}

// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

// function hello(){
//     let username = "Raman"
//     console.log(`Hello, ${this.username} How are you`)
// }
// hello()

// const hello  = () => {
//     let username = "Raman"
//     console.log(this)
// }
// hello()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// const addTwo = (num1,num2) => num1+num2


const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(1,3));
