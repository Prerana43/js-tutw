const user = {
    username: "prerana",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
           console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     console.log(this);
// }

// function chai(){
//     let username = "prerana"
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username2 = "prerana"
//     console.log(this.userrname2)
// }
// const chai = () => {
//     let username = "prerana"
//     console.log(this.username);
// }

// chai();

//() =>  {}

    // const addTwo = (num1, num2)=> {
    //     return num1+ num2
    // }

    //const addTwo  = (num1, num2) => num1 + num2

    // const addTwo = (num1, num2) => (num1 + num2)

    const addTwo = (num1, num2) =>({username: "prerana"})

    console.log(addTwo(3, 4))