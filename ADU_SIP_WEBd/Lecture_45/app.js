import express from 'express'

const app = express();

app.get("/",(req,res) => {
    res.status(200).send('Success');
})


app.listen(3002,() => {
    console.log("Server is running")
})