function name() {
    console.log("Rohit");
}
// name();

function Addition(a,b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return "Please enter valid number";
    }

}
console.log(Addition(3,"4"));
//rest operators
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,100,200,24344));

const user ={
    name:"raju",
    price: 122
}
function handleObject(anyobject) {
    console.log(`my name is ${anyobject.name} and price is ${anyobject.price}`);

}

// handleObject(user);
handleObject({
name:"kumar",
price:10
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));