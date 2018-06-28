// Import Mongoose Schemas
const db = require('../models');

module.exports = {

    // Retrieve all saved articles
    findAll: (req, res) => {
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
    },

    // Save an article
    create: (req, res) => {
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
    },

    // Delete an article
    remove: (req, res) => {
        db.Article
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(error => res.status(422).json(error));
    }
};

// Read all saved articles and send to client
// router.get('/api/articles', (req, res) => {
//     console.log(req);

//     db.Article.find()
//         .sort({ date: -1 })
//         .then(dbArticle => {
//             return res.json(dbArticle);
//         })
//         .catch(error => res.json(error));
// });

// Save an article to the database
// router.post('/api/articles', (req, res) => {
//     const article = req.body;

//     // Update database with scraped article
//     db.Article.updateMany(
//         {
//             title: article.title,
//             url: article.url,
//             date: article.date
//         },
//         {
//             $set:
//             {
//                 title: article.title,
//                 url: article.url,
//                 date: article.url
//             }
//         },
//         { upsert: true })
//         .then(result => {
//             console.log(result);
//         })
//         .catch(error => console.log(error));
//     return res.send('Updated.');
// });

// Delete an article from the database
// router.delete('/api/articles', (req, res) => {

// });