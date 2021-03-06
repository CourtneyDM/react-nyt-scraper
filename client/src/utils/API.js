import axios from 'axios';

export default {
    // Get article from NY Times database
    searchArticles: query => {
        const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
        const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
        return axios.get( queryURL, {
            params: {
                'api-key': APIKEY,
                q: query.q,
                begin_date: query.begin_date + '0101',
                end_date: query.end_date + '1231'
            }
        } );
    },

    // Get articles from database
    getArticles: () => {
        return axios.get( "/api/articles" );
    },

    // Save article to database
    saveArticle: articleData => {
        // console.log( articleData );
        return axios.post( '/api/articles', articleData );
    },
    // Remove article from database
    deleteArticle: id => {
        return axios.delete( 'api/articles/' + id );
    }
}