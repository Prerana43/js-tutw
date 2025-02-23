//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Prerana",

    "full name": "Prerana Nishad",

     [mySym]: "mykey1",

    age: 20,
    location: "Jaipur",
    email : "prerananishad@google.com",
    isLoggedIn: false,
    LastLoginDays: ["monday", "saturday"]
}


// console.log(JsUser["email"])
// console.log(JsUser["full name"])
//console.log(JsUser.mySym)
//console.log(JsUser[mySym])

JsUser.email = "preana7gmail.com"
Object.freeze(JsUser)
JsUser.email = "prerana6gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

//console.log(JsUser.greeting);
console.log(JsUSer.greeting());
