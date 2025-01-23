let a = 300
if (true) {
    let a = 10
    var c = 300
    const b = 20
    // console.log("INNER: ", a);    
}

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// console.log(a);
// console.log(b);
// console.log(c);


// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(3));


function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
addTwo(5)