//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++
//Memory

//stack (primitive) whenever stack is used we will get the copy of the value
let name = "Family Guy";//Original value
let diffName = name; //copied original
console.log(name);
diffName = "friends";
console.log(diffName);

//heap (non primitive)whenever heap is used we will get the reference of the value
let userOne = {
    email: "abc@gmail.com",
    Mob: 112334
}
let userTwo = userOne;
console.log(userTwo);
userTwo.email= "rohit@gmail.com"
console.log(userTwo);
console.log(userOne);