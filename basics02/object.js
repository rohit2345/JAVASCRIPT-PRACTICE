// singleton
// Object.create


// Objects literals
// by default key is considered as string eg "name"
const user = {
    name: "rohit",
    location: "pune",
    age: 23,
    isLoggedIn: true,
    lastLoggedDays: ["Monday","Saturday"]

}

console.log(user.age);
console.log(user["name"]);

user.name = "mahesh";
console.log(user);
// Object.freeze(user)
user.name= "Ajit";
console.log(user);

user.greeting = function(){
    console.log("Hello JS Learner");
}
console.log(typeof user.greeting());

////Objects

// const uber = new Object()
const uber = {};
uber.id = 123;
uber.name = "mohit";
console.log(uber);

const regularUser = {
    email: "abs@gmail.com",
    fullname: {
        userName:{
            firstName: "rohit",
            lastName: "Bhandari"
        }

    }
}
// console.log(regularUser.fullname.userName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


//Array of objects

const ola = [
    {
        id:1,
        email:"abs@gmail.com"
    },
    {
        id:2,
        email:"rohit@gmail.com"
    }
]

ola[1].email = "chaiwithcode@.com"
console.log(ola);
console.log(Object.keys(uber));
console.log(Object.values(uber));
console.log(Object.entries(uber));


