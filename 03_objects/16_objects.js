//singleton -> 
//object literals 

const mySymb = Symbol("Akshat");

const JsUser = {
    name: "AkshatSrivastava",
    "Collage Name" : "Amity University",
    [mySymb]: "askks",
    age: 23,
    City: "Pratapgarh",
    Course: "Btech",
    isLoggedIn: true,
    lastLoginDays:["Monday", "Sunday" , "Saturday"],
}


console.log(JsUser.name);
console.log(JsUser.isLoggedIn);
console.log(JsUser["Course"]);
console.log(JsUser["Collage Name"]);
console.log(mySymb);
console.log(typeof[mySymb]);


Object.freeze(JsUser);
