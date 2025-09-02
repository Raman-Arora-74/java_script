// const myNums  = [1, 2, 3]

// // const myTotal = myNums.reduce(function (acc,current_value) {
// //     console.log(`acc: ${acc} and current_value: ${current_value}`)
    
// //     return acc + current_value
    
// // },0)

// const myTotal = myNums.reduce((acc,current_value) => acc + current_value,0)
// console.log(myTotal)

const shoppingCart  = [
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"python course",
        price:999
    },
    {
        itemname:"mobile development course",
        price:5999
    },
    {
        itemname:"Data science course",
        price:12999
    },
]

const my_total = shoppingCart.reduce((acc, price) => (price.price + acc),0)
console.log(my_total)