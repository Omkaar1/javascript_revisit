let name = "Omkar"
let repoCount = 50

// console.log("My name is "+name +" and my repo count is " + repoCount); //outdated syntax

//  below is String interpolation technique that replaces placeholders 
// in a string with their corresponding values
// console.log(`My name is ${name} and my repo count is ${repoCount}`);



const gameName = new String("Omkar")
// console.log(gameName);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));


/* ----------- Instance String methods ------------- */
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
// 1. sentence.at(index) => 
// 'at()' string method takes integer value and 
// return new string consisting of the single UTF-16 code unit located at the specified offset
// console.log(`an index of ${index} returns the value of ${sentence.at(index)}`);

// 2. .charAt(index) =>
console.log(`The charachter code ${index} is ${sentence.charAt(index)}`);

// 3 .charCodeAt(index) =>
console.log(`The charachter code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

let str1 = "Hello"
let str2 = "World..!"
// 4 ..contcat() method of string values concatenates 
// the string arguments to this string and returns a new string.
console.log(str1.concat(" Omkar..! How are you?"));
console.log(str1.concat(", ",str2));

// 5 .replace()
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("Ruth's","My"));


// .substring()
console.log(paragraph.substring(1));
