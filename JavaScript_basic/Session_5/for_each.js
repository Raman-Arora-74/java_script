const coding = ["js","rb","py","java","cpp"]
// coding.forEach( function (val){ 
//     console.log(val);
// })

// coding.forEach( (val) => { 
//     console.log(val);
// })                        

// function printMe(item){
//     console.log(item)
// }
// coding.foreach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index , arr);
// })

const myCoding = [
    {
        languageName: "Java",
        languageFileName:"java"
    },
    {
        languageName: "Python",
        languageFileName:"py"
    },
    {
        languageName: "JavaScript",
        languageFileName:"js"
    },
]

myCoding.forEach((item)=>{
    console.log(`Key ${item.languageFileName} Value ${item.languageName}`)
})