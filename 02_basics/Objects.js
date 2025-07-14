// OBJECTS : An object is a collection of key-value pairs. The keys are strings (or Symbols), and the values can be any data type — including other objects or functions

//declaration : - 

// (decalaring a symbol and then use it as the key.--------FAQ!!!!)
const mySum = Symbol("key1");

const JsUser = {
    name : "Divya",
    "full name" : "DIVYA",
    [mySum] : "mykey1",       // how we declare symbol as key pair format.
    age : 20,
    email : "tdivyaprakash9971@gmail.com",
    location : "Delhi"
}

console.log(JsUser)