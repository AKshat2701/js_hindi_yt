// const coding = ["js", "ruby", "javascript" , "Cpp", "solidity"];


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

// const myNums = [1,2,3,4,5,6];

// const newNums = myNums.filter( (num) => {
//     num > 4
// } );


// const newNums = [];

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);


// -------------------------------> Reduce in JS 
const myNums = [1,2,3,4,5,6,7,8,9];

// const newNums = myNums.map( (num) => num + 10);

// const newNums = myNums
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
// console.log(newNums);

// const myTotal = myNums.reduce( function (acc, curr) {
//     console.log(`accumulator: ${acc} and curvalue: ${curr}`);
//     return acc + curr ;
// } , 8);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);