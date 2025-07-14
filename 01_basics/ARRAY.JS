// const myArr = [0,1,2,3,4,5]                    // it can be mixed datatypes.

/*const myArr1 = new Array(1,2,3,4)
console.log(myArr1[0])

// ARRAY METHODS 1

myArr.push(6)
console.log(myArr)          // PUSH AN ELEMENT

myArr.pop(6)
console.log(myArr)          // POP AN ELEMENT

myArr.unshift(9)
console.log(myArr)            // PUSH AN ELEMENT AT 0TH INDEX

myArr.shift();
console.log(myArr)              // POP AN ELEMENT AT THE 0TH INDEX 


const newArr = myArr.join();            // joins and changes typeto STRING.

console.log(myArr)
console.log(newArr)                     // TYPE IS "STRIING"


// SLICE AND SPLICE

console.log("A", myArr)

const myMyn = myArr.slice(1,3)             //works on (start,end) where 'end' is not included.
console.log(myMyn)
console.log("B", myArr)

const myMyn1 = myArr.splice(1,3)          // removes the slice part of the array and returns the left.
console.log("C", myArr)     
console.log(myMyn1)
*/


const  Marvel_heros =  ["Batman", "Spiderman", "Ironman"]
const  dc_heros = ["superman", "flash", "Captain"]

/*Marvel_heros.push(dc_heros)
console.log(Marvel_heros)        // this will push dcheros"Array" to marvelARRAY.

Marvel_heros.concat(dc_heros)
const Allhero = Marvel_heros.concat(dc_heros)    // this will push them as a string not as array.
console.log(Allhero);

//Instead of using "concat" method , we can use "SPREAD" OPERATOR to join 2 arrays.

// SPREAD OPERATOR
const all_new_heros = [...Marvel_heros, ...dc_heros]
console.log(all_new_heros)

// FLAT METHOD (RARELY USED)
//  -------- A RARE CASE : ARRAY me ARRAY me ARRAY me ARRAY-----
const sun = [1,2,3,[4,5], 5,6,[7,[8,9], 10], 11]    //now we have to spread it out 
const anotherarr = sun.flat(Infinity)     // we write depth in the bracket .
console.log(anotherarr)
*/


console.log(Array.isArray("divya"));
console.log(Array.from("DIVYA"));
console.log(Array.from({name : "DIVYA"}))   // interesting. this will ask whether to implement key or the value ? .


// (.of) is used to create a new array instance form the arguments we provide. 
let score1 = 200;
let score2 = 300;
let score3 = 400;

console.log(Array.of(score1, score2, score3)); 