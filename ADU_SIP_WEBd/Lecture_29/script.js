// let promise = new Promise((resolve,reject) => {
//     let foodReady = false;

//     if(foodReady){
//         resolve("Food Delivered");
//     }else{
//         reject("Restaurent Closed");
//     }
// })

// promise
// .then((message) => {
//     console.log(promise);
//     console.log(message);
// })
// .catch((err) => {
//     console.log(promise);
//     console.log(err);
// })

//promise with setTimeout 

// let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Food Delivered");
//     },5000);
// })

// promise.then((data) => {
//     console.log(data);
// })

function orderFood(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food Delivered");
            resolve("Pizza");
        },1000);
    })
}

function prepareFood(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Prepare Food");
            resolve();
        },2000);
    })
}

function packFood(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Pack Food");
            resolve();
        },3000);
    })
}

function deliverFood(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Deliver Food");
            resolve();
        },4000);
    })
}

orderFood()
.then((food) =>{
    console.log(food);
   return prepareFood()
})
.then(() =>{
    return packFood()
})
.then(() => deliverFood())
.then(() => {
    console.log("Enjoy Your Meal! ")
})