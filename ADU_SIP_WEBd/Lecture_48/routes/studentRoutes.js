import express from 'express'
const router = express.Router();

router.get('/',(req,res) => {
    res.render('home');
})

router.post('/submit',(req,res) => {
    console.log(req.body);
    res.render('result',{
        student : req.body
    })
})

export default router;