// for of

// ["", "", ""]
// [{}, {}, {}]

const numbers = [1, 2, 3, 4, 5]

for(const num of numbers){
    // console.log(num);
    
}

const greeting  = "Hello world!"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);

for (const [key,value] of map) {
    console.log(key +" - "+ value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key +" - "+ value);
    
}