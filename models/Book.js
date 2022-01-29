const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name : {
        type : String,
        required :true
    },
    id : {
        type : String
    },
    author : {
        type : String
    },
    quantity : {
        type : Number
    },
    price : {
        type : Number
    },
    lanuage : {
        type : String
    },
    publisher : {
        type : String
    },

    /* 
    image {
        
    }, 
    */
    
})

const Book =  mongoose.model("Book" , BookSchema);

module.exports = Book;

