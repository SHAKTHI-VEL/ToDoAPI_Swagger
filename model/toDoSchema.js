const mongoose=require('mongoose')

const toDoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    severity:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('toDoSchema',toDoSchema)