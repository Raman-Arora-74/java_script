const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const Total_heros = marvel_heros.concat(dc_heros)
// console.log(Total_heros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7],[4,5]]
const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Raman"));
console.log(Array.from("Raman"));
console.log(Array.isArray(Array.from("Raman")));
console.log(Array.from({"Key":"Value"})); // intersting

let score1 = 100 
let score2 = 200 
let score3 = 300 
console.log(Array.of(score1,score2,score3));

