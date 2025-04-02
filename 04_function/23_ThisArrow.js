// const user = {
//     username : "hitesh",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username} ,  Welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); 

// function chai () {
//     let username = "Akshat";

//     console.log(this.username);
// }
// chai()

// const chai = function () {

//     let username = "akshat"
//     console.log(this.username);
// }
// chai()


// const chai = () => {
//     let username = "Akshat"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => (num1, num2)
console.log(addTwo(3,5));