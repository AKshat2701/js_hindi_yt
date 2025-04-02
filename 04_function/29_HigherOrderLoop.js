// for of loop

// these are array specific loops

// const arr = [1,3,4,5,6,7];
// for (const element of object) {
    
// }

// const word = "Letter" ;

// for(const letters of word){
//     console.log(letters);
// }
// const cars = ["AUDU","HEROHONDA","BMW"]

// for(const car of cars){ 
//     console.log(car);
// }

// const arr = [1,2,3,4,5];
// for( const num of arr){
//     console.log(num);
// }

// const greetings =  "hello world";
// for(const greets of greetings){
//     console.log(`Each character is ${greets}`);
// }

//  const map = new Map();
//  map.set('IN', 'India')
//  map.set('USA', 'United States of america')
//  map.set('Fr', 'france')

//  console.log(map)

// for(const [key,value] of map){
//     // console.log(key , ':-', value);
// }

// const myObject = {
//     game1 : 'NFS',
//     game2  : 'SPiderman'
// }

// for(const [key, value] of myObject ){
//     console.log(key, ' is ', value);
// }


// const myObject = {
//     js: "JAvascript",
//     cpp: "C++",
//     rb: "Ruby",
//     py: "Python"
// }

// for(const key in myObject){
//     // console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// const programming = ["js" , "rb" , "py", "java", 'cpp'];

// for(const key in programming){
//     console.log(programming[key]);
// }


//for each loop
 
 const coding = ["js", "ruby", "java", "Python"];

// coding.forEach(  function ( val ) {
//     console.log(val);
// })

// coding.forEach( item() => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe())

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName: "CPP",
        languageFileName: "c++"
    },
    {
        languageName : "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); 
})