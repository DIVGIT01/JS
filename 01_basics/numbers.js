/* const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);         // first converts it to string , then gives length of the string !
console.log(balance.toFixed(1));                  // 100.0

/*const otherNumber = 23.869
console.log(otherNumber.toPrecision(3));            // 23.9
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));            // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))         // 10,00,000  */



// *************************** MATHS ****************************

console.log(Math)
console.log(Math.abs(-4));            // removes negative sign   (4)
console.log(Math.round(4.6));         // gives round off   (5)
console.log(Math.ceil(4.2));          // gives next highest number agr 0.1 bhi aage hua to !    (5)
console.log(Math.floor(4.9));         // just  opposite of the floor          (4)
console.log(Math.min(4,3,6,8));       // gives the minimal number !
console.log(Math.max(4,3,6,8));        // gives the maximum number !

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+ 1);

const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

