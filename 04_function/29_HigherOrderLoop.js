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

 const map = new Map();
 map.set('IN', 'India')
 map.set('USA', 'United States of america')
 map.set('Fr', 'france')

//  console.log(map)

for(const [key,value] of map){
    // console.log(key , ':-', value);
}

const myObject = {
    game1 : 'NFS',
    game2  : 'SPiderman'
}

// for(const [key, value] of myObject ){
//     console.log(key, ' is ', value);
// }