//Array (Accepts different types on datatypes)
let arr = [1,3,5,1,6];

let arrName = arr;
// console.log(arrName);
 arrName.push(12);
//  console.log(arrName);
//  console.log(arr);

//  const arrayEmpty = new Array("122");

//  console.log(arrayEmpty.length);

let person = new Array("Rohit","infosys","iBM","capegemini");
// console.log(person.length);
// console.log(`My name is ${person.at(0)}`);
// console.log(person.concat(arr));
// console.log(person.fill("rojat", 2,4));
// console.log(person.lastIndexOf("IBM"));
// console.log(person.slice(0,2));
// console.log(person);
// console.log(person.splice(0,1));
// console.log(person);
console.log(person.sort());
let personName =person.values();
for (const i of personName) {
    console.log(i);;
}
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift(2);

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());