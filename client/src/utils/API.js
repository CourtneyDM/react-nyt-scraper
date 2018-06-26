import axios from 'axios';

const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';

const APIKEY = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';

export default {
    getArticles: query => {
        return axios.get(URL + query + APIKEY);
    },

    saveArticle: articleData => {
        return axios.post('/api/articles', articleData);
    },

    deleteArticle: id => {
        return axios.delete('api/articles' + id);
    }
}