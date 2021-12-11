# MOVIE DATA BASE API CLIENT
 Use The movie database api  easily 

## Installation

The first thing that you had to do is install the `npm package` :

```bash
npm i --save movie-db-client
```

## A MOVIE DB API KEY

You need to create a API KEY.

Open the [MOVIE DATABASE SITE](https://www.themoviedb.org) and create a account
And follow steps above:

```
To get your access API KEY 

1- On the navigation menu, choose your profile pic.

2- Choose Settings.

3- Open the API tab, and then click on "To generate a new API key, click here"

4- Select your role in next screen

5- Accept terms and complete the registration with your personal info

6- In finish screen you can see you API KEY v3 

```



## USAGE

```javascript
var MovieDb = require('movie-db-client');

MovieDb.setConfig({
    apiKey: 'SET YOUR API KEY HERE',
    language: 'pt-BR',
    region: 'BR'
});

async function MovieNode() {

    //Get the most newly created movie. This is a live response and will continuously change.
    // var latest = await MovieDb.movies.latest();

    //Get a list of movies in theatres. This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
    //You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
    //You can pass REGION (US,BR using ISO3166-1) and PAGE (1,2,3);
    //default region is set on setConfig

    var now_playing = await MovieDb.movies.nowPlaying();

    //Get a list of the current popular movies on TMDB. This list updates daily.
    //You can pass REGION (US,BR using ISO3166-1) and PAGE (1,2,3);
    //default region is set on setConfig

    var popular = await MovieDb.movies.popular();

    //Get the top rated movies on TMDB.
    //You can pass REGION (US,BR using ISO3166-1) and PAGE (1,2,3);
    //default region is set on setConfig

    var top_rated = await MovieDb.movies.topRated();

    //Search for movies.
    //You required to pass a Search query to first parameters.
    //You can pass ADULT (boolean), PAGE (1,2,3) and REGION (US,BR using ISO3166-1) ;
    //default region is set on setConfig
    //returns an array with the correspond search.

    var movie_search = await MovieDb.movies.search('Velozes e furiosos', false, '1')

    //Get details from a movie.
    var movie = await MovieDb.movies.details(278)

    //Get poster from a movie.
    //Required to pass a ID from a movie
    //optional width and height ( if dont pass you get a original resolution )
    //avaible resolutions : 220x330 440x660 300x450 600x900 and you can pass only 1280 to get a image

    var movie = await MovieDb.movies.posterPath(278, 220, 330)

}

```

