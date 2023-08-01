const express = require('express')
const app = express()
const port = 3000

//Connect to the database
require('./db')

// create collection
const userRouter = require("./userRouter")
app.use(express.json())
app.use('/user' ,userRouter)

// for custom error
app.use((err , req , res , next)=>{
    res.status(err.status).send({
        message:err.message,
        code:err.code
    })
})



app.listen(port , ()=>{
    console.log(`Server Runing on http://localhost${port}`)
})