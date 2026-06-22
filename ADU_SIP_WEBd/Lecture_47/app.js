import express from 'express'
import ejs from 'ejs'

const app = express();

app.set('view engine','ejs');

app.get("/",(req,res) => {
    res.render('home',
        {
            users : [
                'Gaurav',
                'Rahul',
                'John'
            ]
        }
    );
})

app.listen(5000,() => {
    console.log("Server is running on port 5000");
})