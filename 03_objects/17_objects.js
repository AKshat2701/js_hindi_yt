// const tinderUser = new Object();

const tinderUser = {}


tinderUser.id = "123as";
tinderUser.name = "Akshat";
tinderUser.isLoggedIn = false;



// console.log(tinderUser);
const regularUser = {
    email: "Akshat@2710",
    fullName: {
        usersFullName :{
            firstname : "Akshat",
            lastname: "Srivastava"
        }
    }
}

// console.log(regularUser.fullName.usersFullName.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = { obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

const user = [
    {
        id: 1, 
        email: "H@gmail.com"
    },
    {
        id: 1, 
        email: "H@gmail.com"
    },
    {
        id: 1, 
        email: "H@gmail.com"
    }
]

user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));