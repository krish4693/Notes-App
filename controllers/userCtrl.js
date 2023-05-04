const Users=require('../models/userModel')

const userCtrl={
    registerUser: async(req,res)=>{
        try{
        const {username,email,password}=req.body
        const user= await Users.findOne({email:email})
        if(user) return res.status(400).json({msg:"The email already exist."})
        res.json({msg:"Sign up success"})

        } catch(err){
            return res.status(500).json({msg:err.message})
        }

    },
    loginUser:(req,res)=>{
        try{
            res.json(req.body)
            res.json({msg:"Login successful"})
    
            } catch(err){
                return res.status(500).json({msg:err.message})
            }
    }
}

module.exports=userCtrl