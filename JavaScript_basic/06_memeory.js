/**********************************************************************/

// Stack (Primitive) , Heap (Non-Primitive) 
// in stack memory we get a copy of real data
// in heap memeory we get orginal if we change in any one variable then it change in orginal value 


let myGitHubName = "Raman-Arora-76"
let anothername = myGitHubName
anothername = "Ramandeep-singh"
console.log(anothername);
console.log(myGitHubName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}
let userTwo = userOne
userTwo.email="userTwo@google.com"
console.log(userOne)
console.log(userTwo)
