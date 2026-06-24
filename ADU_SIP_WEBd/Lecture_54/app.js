import express from "express"
const app = express();

app.use(express.json());

// app.post("/add",(req,res) => {
//     console.log(req.body);
//     res.send("Data Received");
// })

//Middleware
// app.use((req,res,next) => {
//     // console.log("Middleware is running");
//     // console.log(req.method);
//     // console.log(req.url);

//     console.log("Someone visited the website");
//     next()
// })

// app.get("/",(req,res) => {
//     res.send("Hello");
// })

// app.get("/about",(req,res) => {
//     res.send("About")
// })

//custom middleware 

// function myMiddleWare(req,res,next){
//     console.log("Custom Middleware Executed");
//     next()
// }

// app.use(myMiddleWare);  //first execution 

// app.get("/",(req,res) => {
//     res.send("Home");
// })

// app.get("/about",(req,res) => {
//     res.send("About");
// })

// function checkAge(req,res,next){
//     let age = 16;
//     if(age > 18){
//         return res.send("Access Denied");
//     }
//     console.log("Next Executed");
//     next();
// }

// app.use(checkAge);

// app.get("/",(req,res) => {
//     res.send("Welcome");
// })

//Route specific middleware 
function checkAdmin(req,res,next){
    console.log("Checking Admin");
    next()
}

function logger(req,res,next){
    console.log("Logger")
    next()
}

function checkAge(req,res,next){
    // let age = req.query.age;
    // if(age < 18){
    //     return res.send("18+ only")
    // }
    console.log("Checking Age")
    next()
}

app.get("/",(req,res) => {
    res.send("Home");
})

app.get("/admin",checkAdmin,(req,res) => {
    res.send("Admin Page");
})

app.get("/movie",logger,checkAge,(req,res) => {
    res.send("Movie Page")
})

app.listen(5010,() => {
    console.log("Server Connected")
})