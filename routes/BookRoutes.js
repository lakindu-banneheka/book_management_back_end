const router = require("express").Router();
const { route } = require("express/lib/application");
const { redirect } = require("express/lib/response");
const { updateOne } = require("../models/Book");
let Book = require("../models/Book");

router.route("/addbook").post( async(req,res) => {              //create new document
    //getting values from front-end
    //const <schema component name> = req.body. <front-end-sending name>
    const name = req.body.name;
    const author = req.body.author;
    const quantity =Number (req.body.quantity);
    const price = Number(req.body.price);
    const lanuage = req.body.lanuage;
    const publisher = req.body.publisher;

    const newBook = new Book ({
        name,
        author,
        quantity,
        price,
        lanuage,
        publisher
        

    })
    await newBook.save().then( () => {
        res.json("New book added !!");
    }).catch( (err) => {
        console.log(err);
    })
})

router.route("/").get( (req, res) => {                              //fetches all the data

    Book.find().then( (bookList) => {
        res.json(bookList)
    }).catch( (err) => {
        console.log(err)
    })
})

router.route("/update-book/:id").post( async(req,res) => {          
    let bookId =  req.params.id;

    const {name, author , quantity , price , lanuage , publisher } = req.body;

    const updateBook = {
        name,
        author,
        quantity,
        price,
        lanuage,
        publisher
    }

    await Book.findByIdAndUpdate(bookId , updateBook).then( () => {  //updates the data according to the given filter
        res.json("Book details updated successfully !")
    }).catch( (err) => {
        console.log(err)
    })  


})

router.route("/delete/:id").delete( async(req,res) => {             //deletes the data according to the given filter
    let bookId = req.params.id;

    await Book.findByIdAndDelete(bookId).then( () => {
        res.json("user deleted")
    }).catch( (err) => {
        console.log(err)
    })

})

router.route("/get/:id").get( async (req , res) => {                //fetches the data according to the give n filteraa
    let bookId = req.params.id;
    
    await Book.findById(bookId).then( (book) => {
        res.json(book)
    }).catch( (er) => {
        console.log(er)
    })
})    
module.exports =  router;
