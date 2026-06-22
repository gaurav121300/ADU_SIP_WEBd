import express from 'express'
const router = express.Router();

let students = [];

//create 
router.get('/',(req,res) => {
    res.render('home');
})

//adding student 

router.post('/add',(req,res) => {
    students.push({
        id : Date.now(),
        name : req.body.name,
        branch : req.body.branch 
    });
    res.redirect('/students');
})

//Read 

router.get('/students',(req,res) => {
    res.render('student',{
        students
    })
})

//delete 
router.get('/delete/:id',(req,res) => {
    const id = Number(req.params.id)
    students = students.filter(
        student => 
            student.id !== id
    )
    res.redirect('/students')
})

//update 
//Step 1 : Open edit page
router.get('/edit/:id',(req,res) => {
    const id = Number(req.params.id)
    const student = students.find(s => s.id === id)
    res.render('edit',{
        student
    })
})

//step 2 : Update Students 
router.post('/update/:id',(req,res) => {
    const id = Number(req.params.id);

    students = students.map(s => {
        if(s.id === id){
            s.name = req.body.name;
            s.branch = req.body.branch;
        }
        return s;
    })
    res.redirect('/students');
})

export default router;