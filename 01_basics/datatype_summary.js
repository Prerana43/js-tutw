// Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

//console.log(id == anotherid)

const bigNumber = 34534763438593643986353n
// we put n in last to take it as bigInt

// Reference (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "prerana",
    age: 20,
} 

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof heros)




// ***************************************

//Stack(Primitive),Heap(Non-Primitve)

let myYoutubename = "prerananishad"
let anothername = myYoutubename
anothername = 'chaiaurcode'

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "prerana@google.com"

console.log(userOne.email);
console.log(userTwo.email);