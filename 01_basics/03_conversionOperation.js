/* String to Number */
let score = "33abc"
let valueNumber = Number(score)
// console.log(valueNumber)
// console.log(typeof valueNumber)

/* "33" => 33
   "33abc => NaN"
    true => 1; false => 0
*/

/* Number to Boolean */
let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)

/*
 1 => true; 0=> false
 "" => false
 "hitesh" => true
*/

/* Number to string */
let someNumber = 33
let StringSomeNumber = String(someNumber)
// console.log(StringSomeNumber)
// console.log(typeof StringSomeNumber)

/*
 33 => string
 string => true; string => false
*/

// ********************** Operations ******************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**2)

let a = 1+1+"1" //tried multiple like 1+"1", "1"+1, "1"+1+1
// console.log(typeof a);
// console.log(a);

// console.log(+true);//=> false
// console.log(+""); //=> 0

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);