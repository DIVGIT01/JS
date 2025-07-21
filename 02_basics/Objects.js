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


// const tinderUser = new object();  --------->  By Literal Method
const tinderUsr = {};    // -----------> Singleton Method

tinderUsr.id = "123abc";
tinderUsr.name = "Sammy";
tinderUsr.isLoggedIn = false;

// console.log(tinderUsr)

const regularUser = {
    email : "tdivyaprakash9971@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Divya",
            lastName : "Tiwari"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)


// Combinig Objects(can be 2 or more).....
const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj5 = {7 : "f", 8 : "j"}

/*const obj3 = Object.assign({}, obj1, obj2, obj5)   // combine all objects.
console.log(obj3) */ 

// there is an another way to combine.

const obj3 = {...obj1 , ...obj2, ...obj5}
// console.log(obj3)


const users = [
    { id : 1,
        email : "divya@gmail.com"
    },
    { id : 2,
        email : "divya2@gmail.com"
    },
    { id : 3,
        email : "divya3@gmail.com"
    }
]

//console.log(users[1].email)
//console.log(tinderUsr)

//console.log(Object.keys(tinderUsr))
//console.log(Object.values(tinderUsr))

const course = {
    coursename : "JS",
    price : 999,
    courseinstructor : "Hitesh"
}

// ham normally bhi kisi key:value pair ko call kr skte.....but instead of this...---->
const {courseinstructor : instructor} = course  //or
console.log(instructor)

// --------- DE-STRUCTURING OBJECTS ----------
/*const navbar = ({}) => {

}
navbar(company = "hitesh")*/


