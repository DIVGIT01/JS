// BASIC WAY OF DECLARATION !
const name = "divya "
const repoCount = 50
//console.log(name+repoCount+" value")

// MODERN WAY OF REPRESENTATION !
//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

// BY THE NEW KEYWORD !
const gameName = new String ("DivyaPrakash")
console.log(gameName)


// CERTAIN 'METHODS' USED IN JS !
/* console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('P'));    */

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(1,4)
console.log(anotherString)

const newStringOne = "   divya   "
console.log(newStringOne)
console.log(newStringOne.trim());           // this will trim extra spaces present in the string !

const url = "https://jubilant-space-garbanzo-r4rqxqj69pwvh5r7j.github.dev/"
console.log(url.replace('space', '-'))

console.log(gameName.split('-'));