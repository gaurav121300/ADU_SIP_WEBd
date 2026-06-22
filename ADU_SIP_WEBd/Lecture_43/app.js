// const person = {
//     name : "John",
//     age : 30
// }

// // const name = person.name;
// // console.log(name);  //John

// const {age , name } = person; //way to destructure from object

// console.log(name); //John
// console.log(age); //30

// // const {name : username,city} = person;
// // console.log(username)
// // console.log(city)  //undefined

// const { city = "Delhi"} = person;
// console.log(city) 

// const user = {
//     name : "John",

//     address : {
//         city : "Mumbai",
//         state : "Maharashtra"
//     }
// }

// // console.log(user);
// // console.log(user.address)
// // console.log(user.address.city);

// const { address : {   //const{address}
//     city,state
// }} = user;

// console.log(city);
// console.log(state);

//Array Destructuring 

// const colors = ['red','orange','green','black'];

// const [first, ,third] = colors;

// console.log(first);
// console.log(third);

//Rest operator

const user = {
    name : "john",
    age : 25,
    city : "Delhi"
}

const {
    name,
    ...others 
} = user;

console.log(name);
console.log(others);
