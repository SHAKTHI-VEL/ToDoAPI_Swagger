const express=require('express')
const router=express.Router()

const toDoSchema=require('../model/toDoSchema')

router.get('/',async(req,res)=>{
    try{
        const task=await (toDoSchema.find())
        res.send(task)
    }
    catch(err){
        res.send(err)
    }
})

router.post('/',async(req,res)=>{
    try {
        const {task,severity,completed}=req.body;
        let todo=await toDoSchema.create({
            task:task,
            severity:severity,
            completed:completed
        })
        res.json(todo)
    } catch (err) {
        res.send(err)
    }
})


router.get('/:id',async(req,res)=>{
    try {
        let id=req.params.id;
        let todo=await(toDoSchema.findById(id))
        if(!todo)
        {
            res.json({"message":"item not found"})
        }else{
        res.send(todo)
        }
    } catch (err) {
        res.send(err)
    }
})


router.delete('/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        let del=await(toDoSchema.findByIdAndDelete(id))
        res.json({"message":"Item deleted"})
    } catch (err) {
        res.send(err)        
    }
})


router.put('/:id',async(req,res)=>{
    try {
        const {task,severity,completed}=req.body
        const newtask={}
        if(task){
            newtask.task=task
        }
        if(severity){
            newtask.severity=severity
        }
        if(completed){
            newtask.completed=completed
        }
        let todo=await(toDoSchema.findById(req.params.id))
        if(!todo){
            return res.send("NOT FOUND");
          }
        
          todo=await(toDoSchema.findByIdAndUpdate(req.params.id,{$set:newtask},{new:true}))

          res.send({todo})
    } catch (err) {
        res.send(err)
    }
})


module.exports=router