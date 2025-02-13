import express from "express"

const app = express()
const PORT = 3000

app.get('/',(req,res)=>{ 
    res.render("loop.ejs",{})
})

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`)
})