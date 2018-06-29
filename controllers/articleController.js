// Import Mongoose Schemas
const db = require( '../models' );

module.exports = {
    // Retrieve all saved articles
    findAll: ( req, res ) => {
        db.Article
            .find( req.query )
            .sort( { date: -1 } )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    },

    // Save an article
    create: ( req, res ) => {
        db.Article
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    },

    // Delete an article
    remove: ( req, res ) => {
        db.Article
            .findById( { _id: req.params.id } )
            .then( dbModel => dbModel.remove() )
            .then( dbModel => res.json( dbModel ) )
            .catch( error => res.status( 422 ).json( error ) );
    }
};