const user = {
    usernmae:  "rohit",
    price: 678,
    welcomeMessage: function(){
        console.log(`${this.usernmae}, Welcome`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.usernmae = "money";
// user.welcomeMessage();

// console.log(this);
// ++++++++funtion 1
// function chai() {
//     let username = "todo";
//     console.log(this);
    
// }
// chai()

// ========Funtion 2 to declared
const chai = function () {
        let username = "todo";
    console.log(this.username);
}

chai()
// =======Arrow function=======imppicite only if we are working with single 
// const addTwo = (a,b)=>{
//     return a+b;
// }

// const addTwo = (a,b)=>(a+b);

const addTwo = (num1, num2) => ({username: "rakes",age: num1,heigh: num2})


console.log(addTwo(26,6))