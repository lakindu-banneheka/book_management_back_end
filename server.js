const express=require("express");
const app=express();
const env=require("dotenv")
env.config();
const mongoose=require("mongoose")
const path=require('path')
const cors=require('cors')


//middleware
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT;

const URL = process.env.MONGO_URL;
///connect database


mongoose.connect(URL
,(error)=>{
    if(!error){
        console.log("Mongo DB connection Success !")
    }
    else{
        console.log(error)
    }
})





app.get('/hell',(req,res)=>{
    console.log('hell');
    
})

app.listen(process.env.PORT,(err)=>{
   if(!err){   
   console.log(`server listen  `);
   }
})

