const userCtrl={
    registerUser: (req,res)=>{
        res.json({msg:"Sign up success"})
    },
    loginUser:(req,res)=>{
        res.json({msg:"Login a User"})
    }
}

module.exports=userCtrl