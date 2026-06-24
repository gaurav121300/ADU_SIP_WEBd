import express from "express"
import path from "path"
import auth from "./middleware/auth.js"
import logger from "./middleware/logger.js"

const app = express()

// app.set("view engine","ejs")
// app.use(express.static("public"))

// app.use(logger); //run for every route 

// app.get("/",(req,res) => {
//     res.render("home")
// })

// app.get("/profile",(req,res) => {
//     res.render("profile")
// })

// app.get("/secret",auth,(req,res) => {
//     res.render("secret");
// })

app.get("/",(req,res,next) => {
    try{
        let x =  y + 10;
        res.send("Home")
    }
    catch(error){
        next(error)
    }
})

app.use((err,req,res,next) => {
    console.log(err.message)
    res.status(500).send("Something Went Wrong")
})

app.listen(5004,() => {
    console.log("Server Working");
})