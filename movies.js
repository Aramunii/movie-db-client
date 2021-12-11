const index = require('./index.js')
const axios = require('axios');


const getParams = function () {
    return new URLSearchParams({
        api_key: index.config.apiKey,
        language: index.config.language,
    }).toString();
}

exports.latest = async function () {
    response = await getResponse('latest', getParams());
    return response;
}

exports.nowPlaying = async function (page = '1', region = index.config.region) {
    const params = new URLSearchParams({ page: page, region: region }).toString();
    response = await getResponse('now_playing', getParams() + '&' + params);
    return response;
}

exports.popular = async function (page = '1', region = index.config.region) {
    const params = new URLSearchParams({ page: page, region: region }).toString();
    response = await getResponse('popular', getParams() + '&' + params);
    return response;
}

exports.topRated = async function (page = '1', region = index.config.region) {
    const params = new URLSearchParams({ page: page, region: region }).toString();
    response = await getResponse('top_rated', getParams() + '&' + params);
    return response;
}

exports.details = async function (movie_id = 278, options = {}) {
    var movieDetails = await getMovie(movie_id);
    if (!isEmpty(options)) {
        if (!undefined(options.alternative_titles) && options.alternative_titles) {
            var alternative_titles = await getAlternativeTitles(movie_id)
            movieDetails.alternative_titles = alternative_titles.titles;
        }
        if (!undefined(options.cast) && options.cast || !undefined(options.crew) && options.crew) {
            var credits = await getCredits(movie_id)
            if (options.cast) {
                movieDetails.cast = credits.cast;
            }
            if (options.crew) {
                movieDetails.crew = credits.crew;
            }
        }
        if (!undefined(options.providers) && options.providers) {
            var providersopt = options.providers;
            var providers = await getProviders(movie_id)
            providers = providers.results[index.config.region];
            if (!undefined(providersopt.streaming) && providersopt.streaming) {
                movieDetails.streaming = providers.flatrate;
            }
            if (!undefined(providersopt.buy) && providersopt.buy) {
                movieDetails.buy = providers.buy;
            }
            if (!undefined(providersopt.rent) && providersopt.rent) {
                movieDetails.rent = providers.rent;
            }
        }
    }
    return movieDetails;
}

exports.poster = async function (movie_id = 278, width = 0, height = 0) {
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

exports.credits = async function (movie_id = 278) {
    response = await getCredits(movie_id);
    return response;
}

exports.search = async function (query = '', adult = false, page = '1', region = index.config.region) {
    const params = new URLSearchParams({ page: page, region: region, query: query, adult: adult }).toString();
    response = await axios.get(`${index.endpoint}search/movie?${getParams()}&${params}`);
    return response.data;
}

exports.searchFirst = async function (query = '', adult = false, options = {}, page = '1', region = index.config.region) {
    const params = new URLSearchParams({ page: page, region: region, query: query, adult: adult }).toString();
    response = await axios.get(`${index.endpoint}search/movie?${getParams()}&${params}`);
    var movie = response.data.results[0]
    if (!undefined(movie)) {
        var movieDetails = await getMovie(movie.id);
        if (!isEmpty(options)) {
            if (!undefined(options.alternative_titles) && options.alternative_titles) {
                var alternative_titles = await getAlternativeTitles(movie.id)
                movieDetails.alternative_titles = alternative_titles.titles;
            }
            if (!undefined(options.cast) && options.cast || !undefined(options.crew) && options.crew) {
                var credits = await getCredits(movie.id)
                if (options.cast) {
                    movieDetails.cast = credits.cast;
                }
                if (options.crew) {
                    movieDetails.crew = credits.crew;
                }
            }
            if (!undefined(options.providers) && options.providers) {
                var providersopt = options.providers;
                var providers = await getProviders(movie.id)
                providers = providers.results[index.config.region];
                if (!undefined(providersopt.streaming) && providersopt.streaming) {
                    movieDetails.streaming = !undefined(providers.flatrate) ? providers.flatrate : '';
                }
                if (!undefined(providersopt.buy) && providersopt.buy) {
                    movieDetails.buy = !undefined(providers.buy) ? providers.buy : '';
                }
                if (!undefined(providersopt.rent) && providersopt.rent) {
                    movieDetails.rent = !undefined(providers.rent) ? providers.rent : ''
                }

            }
        }
        return movieDetails;
    }

    return 'No movies found!';
}

async function getMovie(movie_id) {
    response = await getResponse(movie_id, getParams());
    return response;
}

async function getResponse(endpoint, params) {
    var response = await axios.get(`${index.endpoint}movie/${endpoint}?${params}`);
    return response.data;
}

async function getAlternativeTitles(movie_id) {
    response = await getResponse(movie_id + '/alternative_titles', getParams());
    return response;
}

async function getCredits(movie_id) {
    response = await getResponse(movie_id + '/credits', getParams());
    return response;
}

async function getProviders(movie_id) {
    response = await getResponse(movie_id + '/watch/providers', getParams());
    return response;
}


function undefined(variable) {
    if (typeof variable == 'undefined') {
        return true;
    }
    return false;
}

function isEmpty(obj) {
    if (Object.keys(obj).length == 0) {
        return true;
    }
    return false;
}

