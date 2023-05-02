require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json("Hello everyone,This is my notes app")
})

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})

//Connect to mongodb

