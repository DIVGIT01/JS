// OBJECTS : An object is a collection of key-value pairs. The keys are strings (or Symbols), and the values can be any data type — including other objects or functions

//declaration : - 

// (decalaring a symbol and then use it as the key.--------FAQ!!!!)
/*const mySum = Symbol("key1");

const JsUser = {
    name : "Divya",
    "full name" : "DIVYA",     // ----we cant access this with dot. we can omly access it by using square brackets.
    [mySum] : "mykey1",       // how we declare symbol as key pair format.
    age : 20,
    email : "tdivyaprakash9971@gmail.com",
    location : "Delhi"
}

console.log(JsUser)
console.log(JsUser["full name"])

//CHANGING VALUES :-

JsUser.email = "tdivyachat@gmail.com"
console.log(JsUser)

// FREEZING THE VALUE :- No change will happen in the values of object.
Object.freeze(JsUser)
JsUser.email = "hariomgpt@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greeting1 = function(){
    console.log(`Hello JS User, ${this.name}`)
}


console.log (JsUser.greeting())
console.log(JsUser.greeting1())
*/


// ------------------  BY CONSTRUCTOR(SINGLETON)  -------------------


