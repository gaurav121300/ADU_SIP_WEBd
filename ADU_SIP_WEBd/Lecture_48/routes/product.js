import express from 'express'

const router = express.Router();

router.get("/",(req,res) => {
    res.send('ALL PRODUCTS');
})

export default router;