// let name = "Gaurav";

// console.log(name[3]);
// console.log(name.length);


// console.log(name.toUpperCase());
// console.log(name.toLowerCase()); 

// let str = "JavaScript";

// console.log(str.includes("Script"));  //true 
// console.log(str.includes("script"));  //false

// console.log(str.slice(0,4));  //Java not S because 4 is exclusive

// let str1 = "apple banana orange";
// console.log(str1.split(" "));

// console.log("a");
// console.log("b")
// console.log("c")

// console.log("Start");

// setTimeout(() => {
//     console.log("Hello")
// },5000);

// console.log("End");

//callback 

// function greet(name,callback){
//     console.log("Hello " + name);
//     callback();
// }

// function sayBye(){
//     console.log("Bye");
// }

// greet("Gaurav",sayBye);

//calculator

// function calculate(a,b,operation){
//     return operation(a,b);
// }

// function add(a,b){
//     return a + b;
// }

// function multiply(a,b){
//     return a * b;
// }

// console.log(calculate(5,9,multiply));

// function calci(a,b,operation){
//     return operation(a,b);
// }

// let result = calci(4,8,(a,b)=>{
//     return a + b;
// })

// console.log(result);

function orderFood(callback){
    setTimeout(() => {
        console.log("Food Ordered");
        callback();
    },1000)
}

function prepareFood(callback){
    setTimeout(() => {
        console.log("Food Prepared");
        callback();
    },2000)
}

function packFood(callback){
    setTimeout(() => {
        console.log("Food Packed");
        callback();
    },3000)
}

function deliverFood(callback){
    setTimeout(() => {
        console.log("Food Delivered");
        callback();
    },4000)
}

orderFood(() => {
    prepareFood(() => {
        packFood(() => {
            deliverFood(() => {
                console.log("Enjoy Your Meal! ")
            })
        })
    })
})