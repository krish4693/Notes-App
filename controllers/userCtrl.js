const Users=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userCtrl={
    registerUser: async(req,res)=>{
        try{
        const {username,email,password}=req.body
        const user= await Users.findOne({email:email})
        if(user) return res.status(400).json({msg:"The email already exist."})

        const passwordHash=await bcrypt.hash(password,10)

        const newUser=new Users({
            username:username,
            email:email,
            password:passwordHash
        })
        await newUser.save()
        res.json({msg:"Sign up success"})

        } catch(err){
            return res.status(500).json({msg:err.message})
        }

    },
    loginUser:async(req,res)=>{
        try{
            const {email,password}=req.body;
            const user= await Users.findOne({email:email})
            if(!user) return res.status(400).json({msg:"User doesn't exist."})

            const isMatch=await bcrypt.compare(password,user.password)
            if(!isMatch) return res.status(400).json({msg:"Incorrect password"})

            //if correct create token
            const payload = {id:user._id,name:user.username}
            const token=jwt.sign(payload,process.env.TOKEN_SECRET,{expiresIn:"1d"})

            res.json({token})

    
            } catch(err){
                return res.status(500).json({msg:err.message})
            }
    }
}

module.exports=userCtrl