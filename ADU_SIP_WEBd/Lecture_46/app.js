import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());

app.use(express.json());

// app.post('/signup',(req,res) => {
//     console.log(req.body);
//     res.send(req.body.name);
// })

// app.get("/",(req,res) => {
//     res.send("Welcome Students")
// })

// app.get("/",(req,res) => {
//     console.log(req.method)  //get  method 
//     res.send("Hello");
// })

// app.get("/about",(req,res) => {
//     console.log(req.url);       //which site you are hitting like here /about
//     console.log(req.path);
//     res.send("I am about page");
// })

// app.get("/users/:id",(req,res) => {
//     console.log(req.params);
//     res.send("Done")
// })

// app.get('/search',(req,res) => {
//     console.log(req.query.name);
//     res.send("Done");
// })

app.listen(5000,() => {
    console.log("server is litening on port 5000")
})