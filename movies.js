const index = require('./index.js')
const axios = require('axios');



exports.latest = async function () {
    const params = new URLSearchParams({
        api_key: index.config.apiKey,
        language: index.config.language,
    }).toString();
    response = await getResponse('latest', params);
    return response;
}

exports.nowPlaying = async function (page = '1', region = index.config.region) {
    const params = new URLSearchParams({
        api_key: index.config.apiKey,
        language: index.config.language,
        page: page,
        region: region
    }).toString();
    response = await getResponse('now_playing', params);
    return response;
}

exports.popular = async function (page = '1', region = index.config.region) {
    const params = new URLSearchParams({
        api_key: index.config.apiKey,
        language: index.config.language,
        page: page,
        region: region
    }).toString();
    response = await getResponse('popular', params);
    return response;
}

exports.topRated = async function (page = '1', region = index.config.region) {
    const params = new URLSearchParams({
        api_key: index.config.apiKey,
        language: index.config.language,
        page: page,
        region: region
    }).toString();
    response = await getResponse('top_rated', params);
    return response;
}

exports.details = async function (movie_id = 278) {
    return await getMovie(movie_id);
}

exports.posterPath = async function (movie_id = 278, width = 0, height = 0) {
    response = await getMovie(movie_id);
    var url = 'https://www.themoviedb.org/t/p/'
    var poster_path = response.poster_path;
    if (width == 220 && height == 330) {
        url += 'w220_and_h330_face/' + poster_path;
    } else if (width == 440 && height == 660) {
        url += 'w440_and_h660_face/' + poster_path;
    } else if (width == 300 && height == 450) {
        url += 'w300_and_h450_face/' + poster_path;
    } else if (width == 600 && height == 900) {
        url += 'w600_and_h900_face/' + poster_path;
    } else if (width == 1280) {
        url += 'w1280/' + poster_path;
    } else {
        url += 'original/' + poster_path;
    }
    return url;
}


exports.search = async function (query = '', adult = false, page = '1', region = index.config.region) {
    const params = new URLSearchParams({
        api_key: index.config.apiKey,
        language: index.config.language,
        page: page,
        region: region,
        query: query,
        adult: adult
    }).toString();
    response = await axios.get(`${index.endpoint}search/movie?${params}`);
    return response.data;
}

async function getMovie(movie_id) {
    const params = new URLSearchParams({
        api_key: index.config.apiKey,
        language: index.config.language,
        movie_id: movie_id
    }).toString();
    response = await getResponse(movie_id, params);
    return response;
}

async function getResponse(endpoint, params) {
    var response = await axios.get(`${index.endpoint}movie/${endpoint}?${params}`);
    return response.data;
}