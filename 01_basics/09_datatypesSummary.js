// There are two types of data -> primitive and non primitive

//primitives (7) call by value -> copy me changes hote hai
// String , Number , Booleam, null , undefined, undefined , Symbol , BIGINT, 

const score = 100; 
const scoreValue = 100.3;

// JS is Dynamically types language 

// const isLoggedIn = true ;
// const outSideTem = null;

// let userEmail = undefined;

// const id = Symbol('123') ;
// const AnotherId = Symbol('2334');

// console.log(id === AnotherId)

// const bigNumber =  33333333333333333333n;

// Non primitive (Reference)
//Arrays , Objects, Functions , 


const heros = ["Shaktiman" , "IRONMAN", "DOGEMAN"];


let obj = {
    name : "Akshat",
    age: 23,
    city: "Pratapgarh"
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof(myFunction))