// import subtract, {add,PI} from './math.js';  //like object we will import 
// // import * as math from './math.js'

// console.log(math.add(10, 20));
// console.log(math.subtract(20,5));
// console.log(math.PI);

// const express = require('express');  //commonJs
import express from 'express';          //ES6 you need to add type : Modulo

const app = express();

app.get('/',(req,res) => {
    res.send("Hello World")
})

app.get('/about',(req,res) => {
    res.send("About Page")
})

app.listen(3000,() => {
    console.log("Server is running on 3000")
});

