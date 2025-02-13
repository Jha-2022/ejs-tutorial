import express from "express"

const app = express()
const PORT = 3000

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('index',{name:'Rishi'})
})

app.listen(3000, ()=>{
    console.log(`server is running at ${PORT}`)
})

//<% data %> alaos or a js code execution in rjs
