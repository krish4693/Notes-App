const Notes=require('../models/noteModel')

const noteCtrl={
    getNotes:async(req,res)=>{
        try {
            
            res.json({user_id:req.user.id})
            const notes=await Notes.find({user_id:req.user.id})
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    createNote: async(req, res) =>{
        try {
            const {title, content, date} = req.body;
            const newNote = new Notes({
                title,
                content,
                date,
                user_id: req.user.id,
                name: req.user.name
            })
            // await newNote.save()
            await newNote.save()
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports=noteCtrl