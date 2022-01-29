const express=require("express");
const app = express();
const env = require("dotenv")
env.config();
const mongoose = require("mongoose")
const path = require('path')
const cors = require('cors')



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



const bRoute = require('./routes/BookRoutes')

app.use('/Bookstore',/*(req,res)=>{
    console.log('hellow world');
    
}*/  bRoute)

app.listen(PORT,(err)=>{
   if(!err){   
   console.log(`server listning on PORT ${PORT}  `);
   }
})

/*
1 ) created  2 folders models,routes
model for objects,schemas
routes for routes
2)
*/