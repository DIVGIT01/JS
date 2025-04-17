const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);         // first converts it to string , then gives length of the string !
console.log(balance.toFixed(1));                  // 100.0

/*const otherNumber = 23.869
console.log(otherNumber.toPrecision(3));            // 23.9*/
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));            // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))         // 10,00,000