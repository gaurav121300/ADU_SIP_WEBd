import express from 'express'

const router = express.Router();

router.get('/',(req,res) => {
    res.send("ALL USERS");
})

router.get('/:id',(req,res) => {
    res.send(`User ${req.params.id}`);
})

export default router;