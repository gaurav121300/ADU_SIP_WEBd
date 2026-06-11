// function sayHello(){
//     console.log("Hello");
// }

// let x = sayHello; // store in variable
// x();

//Higher order functions

// function greet(){
//     console.log("Hello");
// }

// function execute(fn){
//     fn();
// }

// execute(greet);

//Returning a function

// function outer(){
//     return function(){
//         console.log("Inside Inner Function");
//     }
// }

// let result = outer();
// console.log(result);

// result();

// function mutiplyBy(x){
//     return function(y){
//         return x * y;
//     }
// }

// let double =  mutiplyBy(2);
// console.log(double);
// console.log(double(5));

//map

// const nums = [1,2,3,4];

// const square = nums.map(function(num){
//     return num * num;
// })

// console.log(square);  

//filter

// const nums = [1,2,3,4,5,6];

// const even = nums.filter(function(num){
//     return num % 2 === 0;
// })

// console.log(even);

//reduce 

// const nums = [2,5,8,10];

// const sum = nums.reduce((acc,curr) => {
//     return acc + curr;
// },0);

// console.log(sum);

//set timeout

// function greet(){
//     console.log("Hello");

// }

// setTimeout(greet,10000);

// setTimeout(() => {
//     console.log("Good morning after 15 seconds")
// },15000);

// var hoisting

console.log(x);  //underfined

var x = 10;

// console.log(a);  //reference error

// let a = 5;


// greet();
// function greet(){
//     console.log("Hello");
// }


//Closure

// function outer(){
//     let x = 10;

//     function inner(){
//         console.log(x);  //x will be accessed from outside
//     }
//     inner();
// }

// outer();  

//counter

// function createCounter(){
//     let count = 0;

//     function increment(){
//         count++;
//         console.log(count);
//     }

//     return increment;
// }

// let counter = createCounter();

//Array

// let fruits = ["Apple","Banana","Orange"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[1] = "Guava";

// for(let i = 0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// fruits.push("peer")

// for(let i = 0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// fruits.pop();
// fruits.pop();
// fruits.pop();

// console.log("After pop")

// for(let i = 0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


// let arr = [1,2,3,6,4];

// for(let a of arr){
//     console.log(a);
// }

//Objects

let student = {
    name : "ABC",
    age : 25,
    city : "Delhi"
}

console.log(student);

console.log(student.name);
console.log(student["age"])

student.gender = "MALE";

console.log(student);  //ADD PROPERTY

student.age = 30; //update property

delete student.city;  //delete property 

console.log(Object.keys(student));

console.log(Object.values(student));

for(let key in student){
    console.log(key,student[key]);
}