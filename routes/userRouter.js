const router=require('express').Router()
const userCtrl=require('../controllers/userCtrl')
const auth=require('../middleware/auth')

router.post('/register',userCtrl.registerUser)
router.post('/login',userCtrl.loginUser)

//VERIFY TOKEN
router.get('/verify',auth,(req,res)=>{
    console.log(req.user)
})

module.exports=router