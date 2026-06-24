export default function logger(req,res,next){
    console.log("---------")
    console.log("Method:",req.method) 
    console.log("URL:",req.url)
    console.log("---------")
    next()
}