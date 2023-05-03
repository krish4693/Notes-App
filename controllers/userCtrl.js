const userCtrl={
    registerUser: (req,res)=>{
        res.json({msg:"Register a User"})
    },
    loginUser:(req,res)=>{
        res.json({msg:"Login a User"})
    }
}

module.exports=userCtrl