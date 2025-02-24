// console.log("A")
// console.log("N")
// console.log("T")

function say(){
    console.log("A")
console.log("N")
console.log("T")
}

//say();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    //console.log("prerana")
    // return result
    //console.log("prerana");

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    //if(username === undefined){} or
    if(username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "prerana",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

//handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600 ]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));