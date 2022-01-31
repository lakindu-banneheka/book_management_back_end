const router = require("express").Router();
const { route } = require("express/lib/application");
const { redirect } = require("express/lib/response");
const { updateOne } = require("../models/Book");
let Book = require("../models/Book");


router.get('/getallbooks',(req,res) =>{                             // get all books
    Book.find()
    .exec((error,bookList) => {
        if(error) {
            return res.status(400).json({ error });
        }
        if(bookList){
            return res.status(200).json({ bookList });
        }});
});

router.get('/getbook/:id',(req,res) => {                            //fetches the data according to the give n book
    let bookId = req.params.id;
    Book.findById(bookId)
    .exec((error,book) => {
        if(error){
            return res.status(400).json({ error })
        }
        if(book){
            return res.status(200).json( book );
        }
    })
});

router.route("/update/:id").post( async(req,res) => {          // update book //updates the data according to the given filter
    let bookId =  req.params.id;
    const {name, author , quantity , price , lanuage , publisher } = req.body;
    const book = { name , author , quantity , price , lanuage , publisher }
    await Book.findByIdAndUpdate(bookId , book)
    .exec((error) => {  
        if(book.name !== undefined ){
            if(book.name.length > 0){
                res.status(201).json("successfully updated")
            }
        }
        if(error){
            res.status(400).json(error)
        }
    })  


})

router.route("/delete/:id").delete( async(req,res) => {             //deletes the data according to the given filter
    let bookId = req.params.id;

    await Book.findByIdAndDelete(bookId).then( () => {
        res.status(204).json("deleted");
    }).catch( (err) => {
        console.log(err)
    })

})


router.route("/addbook").post( async(req,res) => {              //create new book

    const {name, author , quantity , price , lanuage , publisher } = req.body;
    const newBook = new Book ({ name,author,quantity,price,lanuage,publisher })
    await newBook.save().then( () => {
        res.status(201).json("successfully added");
    }).catch( (err) => {
        console.log(err);
    })
})




  


module.exports =  router;
