"use strict"  // treat all JS code as newer version !

// alert(3+3)  // we are using nodejs, not browser 

let name = "divya"
let num = 12112
let islogged_IN = false


//boolean = true/false
// bigint =  for big int values
// null = standalone value (representation of an empty value)
// undefined = variable is declared , but no value is declared it.\
//symbol = unique

//object

console.log(typeof"divya")
console.log(typeof num)


// ********** DATATYPES ***********


//primitive

// 7 types : STRING , NUMBER, NULL, BOOLEAN, UNDEFINED, SYMBOL, BIGINT

// REFERENCE (non primitve)

// Array, Objects , Functions

const id = Symbol('123')
const ANOTHERid = Symbol('123')

console.log (id === ANOTHERid)                    // false


console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
console.log("2"=== 2)              // it will check the datatypes , then compare !