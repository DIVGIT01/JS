let score = "33abc";                      //1st 33

// console.log(typeof score)

let ValueInNumber = Number(score)           //string
// console.log(typeof ValueInNumber)           // number 

//now if we do score = '33abc'

// console.log(ValueInNumber)         // this will give NaN(Not in Number)

// "33" = 33
// "33abc" = NaN

let IsLoggedIn = 1

let booleanIsLoggedIn = Boolean (IsLoggedIn)
// console.log (booleanIsLoggedIn)                      // true
 

let someNumber = 55
let someString = String (someNumber)
console.log(someString)
console.log(typeof someString)