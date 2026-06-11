// // let num = -10;

// // if(num > 0){
// //     console.log("Positive")
// // }
// // else{
// //     console.log("Negative")
// // }

// // //Do even odd code

// // for(let i = 1; i <= 1000;i++){
// //     console.log(i);
// // }

// // //sum of first 10 natural number
// // let sum = 0;

// // for(let i = 1;i<=10;i++){
// //     sum += i;
// // }

// // console.log(sum);

// //Functions

// function greet(){
//     console.log("Hello");
// }

// greet();

// function greet(name){
//     console.log("Hello " + name);
// }

// greet("Gaurav")

// function add(a,b){
//     console.log(a+b);  //passing multiple parameters
// }

// add(5,10);


// function subtract(a,b){
//     return a - b;
// }

// let result = subtract(30,12);
// console.log(result);

const greet = (name) => {
    console.log("Hello " + name);
}

greet("Suraj");
greet("Ganesh");
greet("Gaurav");

const add = (a,b) => {
    return a + b;
}

let ans = add(5,10);
console.log(ans);

const add = (a,b) => a+b;

let ans = add(5,10);
console.log(ans);