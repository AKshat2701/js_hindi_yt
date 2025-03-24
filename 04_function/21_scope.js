// let a = 10;
// const b = 12;
// var c = 399;

 //scope 

 //nested scope

//  function one() {

//     const username = "Akshat"

//     function two() {
//         const website = "Youtube"
//         console.log(username);
//     }
//    console.log(website);
//     two() ;
//  }

//  one();

if(true) {
    const username = "Hitesh"
    if(username === "hitesh") {
        const website = " YOUTUBE"
        console.log(username + website );
    }

    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++ intresting +++++++?
function addone(num) {
    return num + 1;
} 
addone(4)
const addTwo = function(num) {
    return num + 3;
}

addTwo(4);
