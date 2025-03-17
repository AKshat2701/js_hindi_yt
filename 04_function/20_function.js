// function calculateCartPrice(val1, val2, ...num1) {

//     return num1 ;

// }
// console.log(calculateCartPrice(200,433,233,900,500));

const user = {
    username: "Akshat",
    price: 199,

}

function handleObject(anyObject) {

    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`)

}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 433
// })

const myNewArr = [200, 400, 600]

function returnSecondValue(getArray) {
    return getArray[2];
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,400,500]));