// Import Dependencies
const cherio = require('cheerio');
const express = require('express');
const axios = require('axios');

// Import Mongoose Schemas
const db = require('../models');

// Configure Router
const router = express.Router();

// Read all saved articles and send to client
router.get('/articles', (req, res) => {
    db.Article.find()
        .sort({ date: -1 })
        .then(dbArticle => {
            return res.json(dbArticle);
        })
        .catch(error => res.json(error));
});