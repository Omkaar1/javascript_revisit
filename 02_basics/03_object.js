// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Omkar",
    "full name": "Omkar Londhe",
    age: 18,
    [mySym] : "mykey1",
    location: "Pune",
    email: "omkarl@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "omkarlondhe@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "omkarlondhe@chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");   
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js user ${this["full name"]}`);
    
}
console.log(JsUser.greeting2());
