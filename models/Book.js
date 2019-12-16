const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    
});

var Book = mongoose.Model("Book", BookSchema);

module.exports = Book;