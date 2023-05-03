require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userRouter=require('./routes/userRouter')
const noteRouter=require('./routes/noteRouter')

const app=express()
app.use(express.json())
app.use(cors())

// routes
app.use('/user',userRouter)
app.use('/api/notes',noteRouter)

//Listen server
app.get('/',(req,res)=>{
    res.json("Hello everyone,This is my notes app")
})

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})

//Connect to mongodb

const URI=process.env.MONGODB_URL;
mongoose.connect(URI);
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("Connection to database successful");
});

