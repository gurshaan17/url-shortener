import express from "express"

const app = express()

app.get('/',(req,res)=>{
    res.send("init")
})

app.listen(3000)
