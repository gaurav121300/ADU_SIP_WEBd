import mongoose from "mongoose";
import express from "express"
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express();
const port = 5005;

app.get("/",(req,res) => {
    const todo = new Todo({title  : "Hey it is my first todo",desc : "Description of this todo", isDone : false})

    todo.save();

    res.send("Hello");
})

app.get("/todos",async(req,res) => {
    let todos = await Todo.findOne({title : "Java"})

    if(!todos){
        return res.send("Todo Not Found!")
    }
    console.log(todos);
    res.send(todos);
    
})

// app.get("/one",async (req,res) => {
//     const todos = await Todo.findOne();
//     res.send(todos);
// })

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})