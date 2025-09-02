function calculateCartPrice(...num){
    
    return num;
}
console.log(calculateCartPrice(200,200,3999,4663))

const user = {
    username: "Raman", 
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)



}
// handleObject(user)
handleObject({
    username: "sam",
    price: 899
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(array){
    console.log(array[1]);
    
}
returnSecondValue(myNewArray)