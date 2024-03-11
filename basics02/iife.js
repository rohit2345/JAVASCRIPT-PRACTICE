///Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()
// first def and second execution
// ()()
// named IIFE
(function chai() {
    var b= 2;
    console.log(b);
})();
// Arrow function
// Unnamed IIFE

((name)=>{
    console.log(`DB Connected two ${name}`);
})("rohit");

(function person() {
    var a=1
    console.log(a);
})();
let a = 2;
