// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Raman"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname : {
            firstName:"Raman",
            lastName: "Arora"
        },
    },
    
}
// console.log(regularUser.fullname.userfullname.firstName);
// 10 === 10 ? console.log("Hello World") : console.log("Bye world");

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email:"r@gmail.com"
    },
    {

    }
]
console.log(users[0].email)