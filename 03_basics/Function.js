/*function hello() {
    console.log("Hi my name is divya prakash tiwari");
    return 0;}

// hello -  this is the reference.
hello()


function add(num1,num2){
     console.log(num1+num2);
}

const result = add(5,5);
console.log("result : ", result)       //----gives 'undefined'


function add(num1,num2){
     //let result = num1+num2;
     //return result ;
     return  num1+num2;
}

const result = add(5,5);*/
//console.log("result : ", result)

// return ke baad kuch bhi print ni hota h


function loginUserMessage(username){
    if(username == undefined){                     // it can be (!username) here.
        console.log("Enter the username :");
        return
    }
    
    return `${username} just logged in` ;
}

//console.log(loginUserMessage("divya"))
console.log(loginUserMessage())