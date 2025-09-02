const myObject = {
    js:'JavaScript',
    cpp:'C++',
    rb:"ruby",
    swift:"Swift by apple"
}
for (const key in myObject) {
    console.log(`Key :- ${key} Value :- ${myObject[key]}`)
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
    console.log(programming[key])
}

const map  = new Map()
map.set("IN","India")
map.set("USA","United State Kingdom")
map.set("Fr","France")


for (const key in map){
    console.log(key);
}