import express from 'express'
import studentRoutes from './routes/studentRoutes.js'
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({
    extended : true
}));

app.use(express.static('public'));
app.use('/',studentRoutes);

app.listen(5002,() => {
    console.log("Server is Running on port 5002");
})