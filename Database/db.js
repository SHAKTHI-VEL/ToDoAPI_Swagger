
const express=require('express')
const mongoose=require('mongoose');
const url='mongodb+srv://linux:PucHlDb2E6Slcbup@cluster0.wvzbn2c.mongodb.net/todo?retryWrites=true&w=majority'


const db=()=>{
    mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected to database')
})

}

module.exports=db;