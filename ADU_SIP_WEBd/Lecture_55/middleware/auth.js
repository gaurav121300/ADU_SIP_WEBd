export default function auth(req,res,next){
    let password = req.query.password;
    if(password != "1234"){
        return res.send("Unauthorised User")
    }
    next()
}