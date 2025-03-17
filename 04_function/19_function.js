

// function MyName() {
//     console.log("H");
//     console.log("a");
//     console.log("r");

// }


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2 );
// }

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;
// }


// const result = addTwoNumbers(4,5)

// console.log("result:" , result);



function loginUserMessage(userName = "sam"){
    if(!userName){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in `;
} 
// console.log(loginUserMessage("Akshat"));
console.log(loginUserMessage('Akshat'))