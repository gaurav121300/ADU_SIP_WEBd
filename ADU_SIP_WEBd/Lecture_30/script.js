// async function greet(){
//     return "hello";
// }

// console.log(greet());

// function getData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         },1000);
//     })
// }

// async function test(){
//     let result = await getData();
//     console.log(result);
// }

// console.log(test());

// const student = {
//     name : "Gaurav",
//     age : 23,
//     course : "MCA",

//     // greet : function(){
//     //     console.log("Hello");
//     // }
// }   

// console.log(student);

// console.log(student.name)
// console.log(student["course"]);

// student.greet();

// let name = "jsbdjsk";

// const student = {
//     name  : "Gaurav",

//     greet:function(){
//         console.log(this.name);
//     }
// }

// student.greet();

// const student1 = {
//     name : "Anil",
//     age : 25
// }

// const student2 = {
//     name : "Rahul",
//     age : 27
// }


// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log("Hello " + this.name)
//     }
// }

// //creating objects
// const s1 = new Student("Arun",30);
// const s2 = new Student("bsfs",40);
// s1.greet();
// s2.greet();
// console.log(s1);

// class Animal {
//     eat(){
//         console.log("eating");
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log("barking");
//     }
// }

// const d = new Dog();
// d.eat();
// d.bark();

// class Animal {
//     constructor(name){
//         this.name = name;
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.breed = breed;
//     }
// }

// const d1 = new Dog("Tommy","Labarador");
// console.log(d1);

//Method Overriding

class Animal{
    sound(){
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    sound(){
        super.sound();
        console.log("Bark");
    }
}

const d = new Dog();
d.sound();

