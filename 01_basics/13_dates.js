//dates 

// let myDate = new Date() ;

// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());

// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0 , 23); // 0 se months start hote hai
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myNewDate = new Date("2023-01-14");
// let myNewDate = new Date("01-13-2023");
// console.log(myNewDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myNewDate.getTime());

// console.log(Math.floor(Date.now() /1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
