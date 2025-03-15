// const myArray = [12,4,55,6,7,45,3, true, "Akshat"];

// console.log(myArray[0]);
// const myHeros = ["Akshat" , "Hashit"];

// console.log(myHero)

//Array methods;

const myArray = [1,2,3,4,5];
// myArray.push(6);
// console.log(myArray)
// console.log(myArray.pop(4));

// myArray.unshift(9);
// console.log(myArray);

// myArray.shift(9);
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(typeof(myArray));
// console.log(myArray.indexOf(2));

const newArray = myArray.join()
// console.log(newArray);
// console.log(myArray);

// console.log(typeof(newArray))

//slice and splice 
// console.log("A" , myArray);

// const myNewArr1 = myArray.slice(1,3)

// console.log(myNewArr1);
// console.log("B", myArray);


// const myNewArr2 = myArray.splice(1,3) 

//array part -> 2

const marvel_heros = ["Akshat", "srivastava", "Harshit" , "Srivastava"];
const dc_heros= ["SuperMan" , "Flash", "batman"];

// marvel_heros.push(dc);
// console.log(marvel_heros);

// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros];


// console.log(all_new_heros)
const anotherArray = [1,2,3,4,[43,32,12], 5,[99,[321,222],88],6];

// const myRealArray = anotherArray.flat(Infinity);
// console.log(myRealArray);

console.log(Array.isArray("Akshatsruvastava"));
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Akshat"})) //intersting

let score1 = 100;
let score2 = 300;
let score3 = 433;

console.log(Array.of(score1, score2, score3));