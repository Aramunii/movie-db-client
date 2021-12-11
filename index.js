const axios = require('axios');
exports.movies = require('./movies.js');

this.config = {
    apiKey: '',
    language: '',
    region: '',
};

this.endpoint = 'https://api.themoviedb.org/3/'
this.axios = axios;

exports.setConfig = function (config) {
    this.config = config;
    return true;
}

