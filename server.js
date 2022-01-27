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


///connect database
/*

mongoose.connect('mongodb://localhost:27017/e-com',{
   
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
},(error)=>{
    if(!error){
        console.log("succses connect")
    }
    else{
        console.log(error)
    }
})

*/



app.get('/hell',(req,res)=>{
    console.log('hell');
    
})

app.listen(process.env.PORT,(err)=>{
   if(!err){   
   console.log(`server listen  `);
   }
})