import express from 'express'
import userRoutes from './routes/users.js'
import productRoutes from './routes/product.js'
import studentRoutes from './routes/studentRoutes.js'
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended : true}));  //post request 
app.use(express.static('public'));

app.use('/',studentRoutes);

// app.get("/",(req,res) => {
//     res.render('home');
// })

// app.post('/signup',(req,res) => {
//     const name = req.body.name;
//     res.send(`Hello ${name}`);
// })



app.use('/users',userRoutes);
app.use('/products',productRoutes);

app.listen(5000,() => {
    console.log("Server is working on 5000")
})