const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String
    },
    authors: [{
        type: String
    }],
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

var Book = mongoose.Model("Book", BookSchema);

module.exports = Book;