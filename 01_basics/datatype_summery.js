// # Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//

// Refernce (Non primitive)
// Arryay, Objects, Functions

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Omkar",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

//***********************************

// Stack(Primitive), Heap(Non-Primitive)
// by value
let mynum = 22
let anothernum = mynum
anothernum = 98
console.log(mynum);
console.log(anothernum);

// by reference
let userOne = {
    email:"user@google.com",
    upi :"upi11"
}

let userTwo = userOne
userTwo.email = "omkar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
