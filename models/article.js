// Import Dependencies
const mongoose = require('mongoose');

// Create a reference to the Mongoose Schema constructor
const Schema = mongoose.Schema;

// Create the Article Schema object
const ArticleSchema = new Schema({
    // Require an article title
    title: {
        type: String,
        required: true
    },
    // Require an article's date
    date: {
        type: String,
        required: true
    },
    // Require the article's url
    url: {
        type: String,
        required: true
    }
});

const Article = mongoose.model('Article', ArticleSchema);

module.export = Article;