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

// Here you set some configurations to make request.
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
 
}

```

# Functions

## **movies.search(query : *string* ,adult : *boolean*,page : *string*)**
#### Search for movies with a query 
  
## **Usage**
```javascript

var latest = await MovieDb.movies.search('Velozes e furiosos 8',false)

```
###  *Return*

<details>
  <summary>show result</summary>

```json
{
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [Array],
      id: 385687,
      original_language: 'en',
      original_title: 'Fast & Furious 10',
      overview: '',
      popularity: 183.387,
      poster_path: '/2DyEk84XnbJEdPlGF43crxfdtHH.jpg',
      release_date: '2023-04-06',
      title: 'Velozes & Furiosos 10',
      video: false,
      vote_average: 0,
      vote_count: 0
    },
    {
      adult: false,
      backdrop_path: '/gyCHdpyPXmp7rqxE10nlImkzRo9.jpg',
      genre_ids: [Array],
      id: 168259,
      original_language: 'en',
      original_title: 'Furious 7',
      overview: 'Após os acontecimentos em Londres, Dom, Brian, Letty e o resto da equipe têm a chance de voltar para os Estados Unidos e recomeçar suas vidas. Mas a tranquilidade do grupo é destruída quando Deckard Shaw, um assassino profissional, quer vingança pelo acidente que deixou seu irmão em coma. Agora, a equipe tem de unir forças para deter um vilão novo e ainda mais perigoso. 
Dessa vez, não se trata apenas de uma questão de velocidade: a corrida é pela sobrevivência.',
      popularity: 92.522,
      poster_path: '/vK3EINuibdkBwUe9jOhVUXtLeb6.jpg',
      release_date: '2015-04-02',
      title: 'Velozes & Furiosos 7',
      video: false,
      vote_average: 7.3,
      vote_count: 8801
    },
    {
      adult: false,
      backdrop_path: '/9xnhzlvG9lrGqaiRHaMCX96rTTd.jpg',
      genre_ids: [Array],
      id: 20174,
      original_language: 'en',
      original_title: 'The Fast and the Furious',
      overview: '',
      popularity: 2.156,
      poster_path: '/90PJH3U5jmB7NOoemVfbEKHXDIV.jpg',
      release_date: '1954-11-01',
      title: 'Velozes e Furiosos',
      video: false,
      vote_average: 4.7,
      vote_count: 15
    },
    {
      adult: false,
      backdrop_path: '/gGTCDNEvwG848u34Op1nZNALLUr.jpg',
      genre_ids: [Array],
      id: 385128,
      original_language: 'en',
      original_title: 'F9',
      overview: 'Dominic Toretto e sua família precisam enfrentar o seu irmão mais novo Jakob, um assassino mortal que está trabalhando com uma antiga inimiga, a cyber-terrorista Cipher.',       
      popularity: 489.586,
      poster_path: '/fnAzaxRSiveFafudJtByxA7I2xT.jpg',
      release_date: '2021-06-24',
      title: 'Velozes & Furiosos 9',
      video: false,
      vote_average: 7.4,
      vote_count: 4526
    },
    {
      adult: false,
      backdrop_path: '/jzdnhRhG0dsuYorwvSqPqqnM1cV.jpg',
      genre_ids: [Array],
      id: 337339,
      original_language: 'en',
      original_title: 'The Fate of the Furious',
      overview: 'Depois que Brian e Mia se aposentaram, e o resto da equipe foi exonerado, Dom e Letty estão em lua de mel e levam uma vida pacata e completamente normal. Mas a adrenalina do passado volta com tudo quando uma mulher misteriosa faz com que Dom retorne ao mundo do crime e da velocidade.',
      popularity: 99.937,
      poster_path: '/38RVo4cX1O7Ia6k9WXcxkxprHm.jpg',
      release_date: '2017-04-13',
      title: 'Velozes & Furiosos 8',
      video: false,
      vote_average: 6.9,
      vote_count: 8640
    },
    {
      adult: false,
      backdrop_path: '/3ZiM6gm2XL8qnhZCXsTjixvaH4v.jpg',
      genre_ids: [Array],
      id: 13804,
      original_language: 'en',
      original_title: 'Fast & Furious',
      overview: `Depois de ser visto rumo ao México no filme que 
deu origem a série, Dominic "Dom" Toretto reaparece na República 
Dominicana praticando seus golpes ao lado de sua namorada Letty e sua gangue. Com o FBI na sua cola, Dom decide fugir para não comprometer seus comparsas. Contudo, um assassinato cometido por um 
traficante de drogas acende nele uma sede de vingança que o faz cruzar novamente com o agente Brian O'Conner numa perigosa missão.`,
      popularity: 21.417,
      poster_path: '/zvjQPVttJWaCSbzMijyc2x2MLr4.jpg',
      release_date: '2009-04-24',
      title: 'Velozes e Furiosos 4',
      video: false,
      vote_average: 6.7,
      vote_count: 5712
    },
    {
      adult: false,
      backdrop_path: '/enF1PHz15lI9BaPGYYKBMnEbANh.jpg',
      genre_ids: [Array],
      id: 77959,
      original_language: 'en',
      original_title: 'The Turbo Charged Prelude for 2 Fast 2 Furious',
      overview: "Prelude turbo é um 2003 curta-metragem, dirigido por Philip Atwell, com Paul Walker reprisando seu papel como Brian O'Conner, em uma curta série de sequências que liga The Fast and the Furious com sua primeira sequela, 2 Fast 2 Furious. O curta-metragem foi incluído em uma nova impressão do DVD do segundo filme. Foi lançado em 03 de junho de 2003 para amarrar com a versão teatral do segundo filme.",
      popularity: 0.868,
      poster_path: '/bztZ5NWmsT7oq0vCWGQGWxd10Gf.jpg',
      release_date: '2003-06-03',
      title: 'Velozes e Furiosos: Turbo-Charged Prelude',        
      video: false,
      vote_average: 6.4,
      vote_count: 151
    },
    {
      adult: false,
      backdrop_path: '/rF8HkxQ1RlrcPg41gmL5AM56Qxd.jpg',
      genre_ids: [Array],
      id: 82992,
      original_language: 'en',
      original_title: 'Fast & Furious 6',
      overview: 'Desde que o golpe de Dom e Brian no Rio de Janeiro deixou o grupo com US$100 milhões, a equipe se espalhou pelo mundo. Um dia, Hobbs pede a Dom que reúna um grupo de elite em Londres e apreenda uma organização de mercenários nas ruas, cujo mentor é apoiado por Letty, a antiga namorada de Dom que ele acreditava estar morta. A recompensa? Absolvição a todos eles para poderem voltar para as suas casas e tornarem suas famílias completas novamente.',
      popularity: 9.489,
      poster_path: '/yeF9WQvxHRrJnr5fGEfnzDpn4pA.jpg',
      release_date: '2013-05-24',
      title: 'Velozes & Furiosos 6',
      video: false,
      vote_average: 6.8,
      vote_count: 9007
    },
    {
      adult: false,
      backdrop_path: '/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg',
      genre_ids: [Array],
      id: 384018,
      original_language: 'en',
      original_title: 'Fast & Furious Presents: Hobbs & Shaw',   
      overview: 'O corpulento policial Luke Hobbs se junta ao fora da lei Deckard Shaw para combater um terrorista geneticamente melhorado que tem força sobre-humana.',
      popularity: 148.283,
      poster_path: '/w5HWdAJyAbfpXbXDmEt5OIpf6kQ.jpg',
      release_date: '2019-08-01',
      title: 'Velozes & Furiosos: Hobbs & Shaw',
      video: false,
      vote_average: 6.9,
      vote_count: 5475
    },
    {
      adult: false,
      backdrop_path: '/jY9ef5nqY4xIIMu3yzW3qamUCoi.jpg',
      genre_ids: [Array],
      id: 9799,
      original_language: 'en',
      original_title: 'The Fast and the Furious',
      overview: 'Um investigador da polícia se infiltra em uma t u
rma de rachas suspeita de roubar caminhões, mas acaba apaixonando-se pela irmã do líder.',
      popularity: 5.132,
      poster_path: '/s02HsnF8H2plColwtkbqYz9GTw5.jpg',
      release_date: '2001-09-28',
      title: 'Velozes e Furiosos',
      video: false,
      vote_average: 6.9,
      vote_count: 7836
    },
    {
      adult: false,
      backdrop_path: '/lvSxooYCRuF3S2kHWXYTrcOtYco.jpg',
      genre_ids: [Array],
      id: 51497,
      original_language: 'en',
      original_title: 'Fast Five',
      overview: "Desde que o ex-policial Brian O'Conner e Mia Torretto libertaram Dom da prisão, eles viajam pelas fronteiras para fugir das autoridades. No Rio de Janeiro, eles fazem um último trabalho antes que possam ganhar sua liberdade definitiva. Montando sua equipe de elite de pilotos de carro, Brian e Dom sabem que 
têm de enfrentar o empresário corrupto que quer vê-los mortos, antes que o agente federal em sua trilha os encontre.",
      popularity: 12.735,
      poster_path: '/l1lvu5P4xfBicxuhgL0pmvkWReO.jpg',
      release_date: '2011-05-05',
      title: 'Velozes & Furiosos 5: Operação Rio',
      video: false,
      vote_average: 7.2,
      vote_count: 6422
    },
    {
      adult: false,
      backdrop_path: '/z3ioibdjWZOYeXjoiabFOFOfPI3.jpg',
      genre_ids: [Array],
      id: 584,
      original_language: 'en',
      original_title: '2 Fast 2 Furious',
      overview: 'O ex-policial Brian comete uma grande traição, juntando-se a um amigo ex-presidiário no transporte de dinheiro sujo para uma importadora-exportadora muito suspeita.',
      popularity: 5.943,
      poster_path: '/tMUnCAgfARTdAu8ylPw4Wjh3e5N.jpg',
      release_date: '2003-06-13',
      title: '+ Velozes + Furiosos',
      video: false,
      vote_average: 6.4,
      vote_count: 5663
    },
    {
      adult: false,
      backdrop_path: '/dMARcKLrv0T7kVJ4iQR3vqTTdtT.jpg',
      genre_ids: [Array],
      id: 9615,
      original_language: 'en',
      original_title: 'The Fast and the Furious: Tokyo Drift',   
      overview: 'Sean Boswell é um piloto de rua que desafia seu 
rival e bate o carro no fim da corrida. Então, Sean decide se mudar para o Japão em companhia de seu pai para evitar a prisão nos 
Estados Unidos, já que os rachas não são nada populares com as autoridades. Em Tóquio, ele começa a aprender um excitante e perigoso estilo novo de competir nas ruas. Só que os riscos ficam ainda mais altos quando Sean decide competir com o campeão local e acaba se apaixonando pela namorada dele.',
      popularity: 10.188,
      poster_path: '/qexEesWpZgxLFlOrm54Sjn3Z7Y0.jpg',
      release_date: '2006-06-03',
      title: 'Velozes e Furiosos: Desafio em Tóquio',
      video: false,
      vote_average: 6.4,
      vote_count: 5085
    }
  ],
  total_pages: 1,
  total_results: 13
}
```
</details>

<p> 

## **movies.searchFirst(query : *string* ,adult : *boolean*,page : *string*, options: *object*)**
#### Get a first result in a search and show details
  
## **Usage**
```javascript

const options = {
    alternative_titles:true,
    cast:false,
    crew:false,
    providers: {
        streaming:true,
        buy:false,
        rent:false
    }
}

var movie = await MovieDb.movies.searchFirst('Homem aranha de volta', false, options)

```
###  *Return*

<details>
  <summary>show result</summary>

```json
{
  adult: false,
  backdrop_path: '/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg',
  belongs_to_collection: {
    id: 531241,
    name: 'Homem-Aranha - Vingadores',
    poster_path: '/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg',
    backdrop_path: '/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg'
  },
  budget: 175000000,
  genres: [
    { id: 28, name: 'Ação' },
    { id: 12, name: 'Aventura' },
    { id: 878, name: 'Ficção científica' },
    { id: 18, name: 'Drama' }
  ],
  homepage: 'http://marvel.com/spidermanhomecoming',
  id: 315635,
  imdb_id: 'tt2250912',
  original_language: 'en',
  original_title: 'Spider-Man: Homecoming',
  overview: 'Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.',
  popularity: 629.578,
  poster_path: '/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg',
  production_companies: [
    {
      id: 420,
      logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
      name: 'Marvel Studios',
      origin_country: 'US'
    },
    {
      id: 5,
      logo_path: '/71BqEFAF4V3qjjMPCpLuyJFB9A.png',
      name: 'Columbia Pictures',
      origin_country: 'US'
    },
    {
      id: 84041,
      logo_path: '/nw4kyc29QRpNtFbdsBHkRSFavvt.png',
      name: 'Pascal Pictures',
      origin_country: 'US'
    },
    {
      id: 34034,
      logo_path: null,
      name: 'LStar Capital',
      origin_country: 'US'
    },
    {
      id: 34,
      logo_path: '/GagSvqWlyPdkFHMfQ3pNq6ix9P.png',
      name: 'Sony Pictures',
      origin_country: 'US'
    }
  ],
  production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
  release_date: '2017-07-05',
  revenue: 880166924,
  runtime: 133,
  spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
  status: 'Released',
  tagline: 'O dever de casa pode esperar. A cidade não.',
  title: 'Homem-Aranha: De Volta ao Lar',
  video: false,
  vote_average: 7.4,
  vote_count: 17298,
  alternative_titles: [
    { iso_3166_1: 'KR', title: '마블 스파이더맨 홈커밍', type: '' },
    {
      iso_3166_1: 'CR',
      title: 'Hombre araña: Regreso a casa',
      type: ''
    },
    {
      iso_3166_1: 'MX',
      title: 'Spider-Man: De regreso a casa',
      type: ''
    },
    {
      iso_3166_1: 'BR',
      title: 'Homem-Aranha: De Volta ao Lar',
      type: ''
    },
    { iso_3166_1: 'US', title: 'Spider-Man Homecoming', type: '' },
    { iso_3166_1: 'CN', title: '蜘蛛侠：英雄归来', type: '' }
  ],
  streaming: [
    {
      display_priority: 0,
      logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
      provider_id: 8,
      provider_name: 'Netflix'
    },
    {
      display_priority: 7,
      logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
      provider_id: 531,
      provider_name: 'Paramount Plus'
    },
    {
      display_priority: 10,
      logo_path: '/mzu37NQphDvqN2BHKM0Rwq9Es3r.jpg',
      provider_id: 167,
      provider_name: 'Claro video'
    },
    {
      display_priority: 10,
      logo_path: '/hcWBV1zDoMOxAbyaVbj7SNSPgPg.jpg',
      provider_id: 227,
      provider_name: 'Telecine Play'
    },
    {
      display_priority: 11,
      logo_path: '/3JXBhduFj3Q3YSqTSNmOdgzNf1I.jpg',
      provider_id: 307,
      provider_name: 'Globo Play'
    },
    {
      display_priority: 16,
      logo_path: '/zznIwoeBvIUHJUfCaXzzmvJz2WH.jpg',
      provider_id: 194,
      provider_name: 'Starz Play Amazon Channel'
    },
    {
      display_priority: 32,
      logo_path: '/dNAz0MMIPiqCD2axGIktXSFWmkz.jpg',
      provider_id: 484,
      provider_name: 'NOW'
    },
    {
      display_priority: 38,
      logo_path: '/pDcaPupcS7YxKce2sQePrq8k1gK.jpg',
      provider_id: 43,
      provider_name: 'Starz'
    },
    {
      display_priority: 46,
      logo_path: '/2Ybxf5CHukSucAjhOmIkQ6hTmal.jpg',
      provider_id: 574,
      provider_name: 'Oi Play'
    }
  ]
}
```

</details>

<p> 


## **movies.details(movie_id : *int* ,options: *object*)**
#### Get a movie details with movieId
  
## **Usage**
```javascript

const options = {
    alternative_titles:true,
    cast:false,
    crew:false,
    providers: {
        streaming:true,
        buy:false,
        rent:false
    }
}

var movie = await MovieDb.movies.details(315635, false, options)

```
###  *Return*

<details>
  <summary>show result</summary>

```json
{
  adult: false,
  backdrop_path: '/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg',
  belongs_to_collection: {
    id: 531241,
    name: 'Homem-Aranha - Vingadores',
    poster_path: '/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg',
    backdrop_path: '/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg'
  },
  budget: 175000000,
  genres: [
    { id: 28, name: 'Ação' },
    { id: 12, name: 'Aventura' },
    { id: 878, name: 'Ficção científica' },
    { id: 18, name: 'Drama' }
  ],
  homepage: 'http://marvel.com/spidermanhomecoming',
  id: 315635,
  imdb_id: 'tt2250912',
  original_language: 'en',
  original_title: 'Spider-Man: Homecoming',
  overview: 'Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.',
  popularity: 629.578,
  poster_path: '/9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg',
  production_companies: [
    {
      id: 420,
      logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
      name: 'Marvel Studios',
      origin_country: 'US'
    },
    {
      id: 5,
      logo_path: '/71BqEFAF4V3qjjMPCpLuyJFB9A.png',
      name: 'Columbia Pictures',
      origin_country: 'US'
    },
    {
      id: 84041,
      logo_path: '/nw4kyc29QRpNtFbdsBHkRSFavvt.png',
      name: 'Pascal Pictures',
      origin_country: 'US'
    },
    {
      id: 34034,
      logo_path: null,
      name: 'LStar Capital',
      origin_country: 'US'
    },
    {
      id: 34,
      logo_path: '/GagSvqWlyPdkFHMfQ3pNq6ix9P.png',
      name: 'Sony Pictures',
      origin_country: 'US'
    }
  ],
  production_countries: [ { iso_3166_1: 'US', name: 'United States of America' } ],
  release_date: '2017-07-05',
  revenue: 880166924,
  runtime: 133,
  spoken_languages: [ { english_name: 'English', iso_639_1: 'en', name: 'English' } ],
  status: 'Released',
  tagline: 'O dever de casa pode esperar. A cidade não.',
  title: 'Homem-Aranha: De Volta ao Lar',
  video: false,
  vote_average: 7.4,
  vote_count: 17298,
  alternative_titles: [
    { iso_3166_1: 'KR', title: '마블 스파이더맨 홈커밍', type: '' },
    {
      iso_3166_1: 'CR',
      title: 'Hombre araña: Regreso a casa',
      type: ''
    },
    {
      iso_3166_1: 'MX',
      title: 'Spider-Man: De regreso a casa',
      type: ''
    },
    {
      iso_3166_1: 'BR',
      title: 'Homem-Aranha: De Volta ao Lar',
      type: ''
    },
    { iso_3166_1: 'US', title: 'Spider-Man Homecoming', type: '' },
    { iso_3166_1: 'CN', title: '蜘蛛侠：英雄归来', type: '' }
  ],
  streaming: [
    {
      display_priority: 0,
      logo_path: '/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg',
      provider_id: 8,
      provider_name: 'Netflix'
    },
    {
      display_priority: 7,
      logo_path: '/pkAHkRhIq3Iu0ZlEhDzbguSlyZF.jpg',
      provider_id: 531,
      provider_name: 'Paramount Plus'
    },
    {
      display_priority: 10,
      logo_path: '/mzu37NQphDvqN2BHKM0Rwq9Es3r.jpg',
      provider_id: 167,
      provider_name: 'Claro video'
    },
    {
      display_priority: 10,
      logo_path: '/hcWBV1zDoMOxAbyaVbj7SNSPgPg.jpg',
      provider_id: 227,
      provider_name: 'Telecine Play'
    },
    {
      display_priority: 11,
      logo_path: '/3JXBhduFj3Q3YSqTSNmOdgzNf1I.jpg',
      provider_id: 307,
      provider_name: 'Globo Play'
    },
    {
      display_priority: 16,
      logo_path: '/zznIwoeBvIUHJUfCaXzzmvJz2WH.jpg',
      provider_id: 194,
      provider_name: 'Starz Play Amazon Channel'
    },
    {
      display_priority: 32,
      logo_path: '/dNAz0MMIPiqCD2axGIktXSFWmkz.jpg',
      provider_id: 484,
      provider_name: 'NOW'
    },
    {
      display_priority: 38,
      logo_path: '/pDcaPupcS7YxKce2sQePrq8k1gK.jpg',
      provider_id: 43,
      provider_name: 'Starz'
    },
    {
      display_priority: 46,
      logo_path: '/2Ybxf5CHukSucAjhOmIkQ6hTmal.jpg',
      provider_id: 574,
      provider_name: 'Oi Play'
    }
  ]
}
```

</details>

<p> 

## **movies.latest()**
#### Get latest movie 
  
## **Usage**
```javascript

var latest = await MovieDb.movies.latest()

```
###  *Return* 

<details>
  <summary>show result</summary>


```json
{
  adult: false,
  backdrop_path: null,
  belongs_to_collection: null,
  budget: 0,
  genres: [],
  homepage: '',
  id: 914437,
  imdb_id: 'tt4059794',
  original_language: 'de',
  original_title: 'Chafariz das Virtudes',
  overview: '',
  popularity: 0,
  poster_path: null,
  production_companies: [
    {
      id: 62009,
      logo_path: null,
      name: 'Viennale',
      origin_country: ''
    }
  ],
  production_countries: [ { iso_3166_1: 'AT', name: 'Austria' } ],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: 'Released',
  tagline: '',
  title: 'Chafariz das Virtudes',      
  video: false,
  vote_average: 0,
  vote_count: 0
}
```

</details>

<p>

## **movies.popular()**;
#### Get a list of the current popular movies on TMDB. This list updates daily.

## **Usage**
```javascript

var latest = await MovieDb.movies.popular()

```

### *Return* 

```json
{
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg',
      genre_ids: [Array],
      id: 580489,
      original_language: 'en',
      original_title: 'Venom: Let There Be Carnage',
      overview: 'Em busca de seu próximo furo de reportagem, o jornalista Eddie Brock consegue uma entrevista exclusiva com Cletus Kasady, um assassino no corredor da morte, que descobre o segredo de Eddie e se torna o hospedeiro de Carnificina, um simbionte aterrorizante 
e ameaçador. Eddie e Venom precisam superar sua relação atribulada e trabalhar em conjunto para derrotar Carnificina.',
      popularity: 7325.304,
      poster_path: '/h5UzYZquMwO9FVn15R2eK2itmHu.jpg',
      release_date: '2021-10-07',      
      title: 'Venom: Tempo de Carnificina',
      video: false,
      vote_average: 7.2,
      vote_count: 4287
    },
    {
      adult: false,
      backdrop_path: '/5uVhMGsps81CN0S4U9NF0Z4tytG.jpg',
      genre_ids: [Array],
      id: 512195,
      original_language: 'en',
      original_title: 'Red Notice',    
      overview: 'No mundo do crime internacional, a INTERPOL lança um Alerta Vermelho, o que inicia uma caçada para capturar a mais notória ladra de artes do globo.',
      popularity: 3934.321,
      poster_path: '/pe17f8VDfzbvbHSAKAlcORtBHmW.jpg',
      release_date: '2021-11-12',      
      title: 'Alerta Vermelho',        
      video: false,
      vote_average: 6.8,
      vote_count: 1907
    },
  ],
  total_pages: 500,
  total_results: 10000
}
```


## **movies.topRated()**;
#### Get the top rated movies on TMDB


## **Usage**

#### *Parameters (optionals)*:

Region - You can set region (US,BR...) using ISO3166-1 type
Page - Set a number page result;
 
```javascript

var latest = await MovieDb.movies.topRated(page,region)

```

### *Return* 

```json
{
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
      genre_ids: [Array],
      id: 278,
      original_language: 'en',
      original_title: 'The Shawshank Redemption',
      overview: 'Em 1946, Andy Dufresne, um banqueiro jovem e bem sucedido, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do 
amante dela. Ele é mandado para uma prisão que é o pesadelo de qualquer detento, a Penitenciária Estadual de Shawshank, no Maine. 
Lá ele irá cumprir a pena perpétua. Andy logo será apresentado a 
Warden Norton, o corrupto e cruel agente penitenciário, que usa a Bíblia como arma de controle e ao Capitão Byron Hadley que trata os internos como animais. Andy faz amizade com Ellis Boyd Redding, um prisioneiro que cumpre pena há 20 anos e controla o mercado negro da instituição.',
      popularity: 61.283,
      poster_path: '/umX3lBhHoTV7Lsci140Yr8VpXyN.jpg',
      release_date: '1995-03-17',
      title: 'Um Sonho de Liberdade',
      video: false,
      vote_average: 8.7,
      vote_count: 20253
    },
    {
      adult: false,
      backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
      genre_ids: [Array],
      id: 238,
      original_language: 'en',
      original_title: 'The Godfather',
      overview: 'Uma família mafiosa luta para estabelecer sua supremacia nos Estados Unidos depois da Segunda Guerra Mundial. Uma tentativa de assassinato deixa o chefão Vito Corleone incapacitado e força os filhos Michael e Sonny a assumir os negócios.',    
      popularity: 60.24,
      poster_path: '/oJagOzBu9Rdd9BrciseCm3U3MCU.jpg',
      release_date: '1972-07-07',
      title: 'O Poderoso Chefão',
      video: false,
      vote_average: 8.7,
      vote_count: 15161
    }
  ],
  total_pages: 256,
  total_results: 5102
}
```




## **movies.poster(movie_id : *int*,width : *int*,height : *int* )**;
#### Get poster from a movie.
#### Required to pass a ID from a movie
#### Avaible resolutions
```
 220x330
 440x660
 300x450
 600x900
 1280
```

## **Usage**
 
```javascript

var movie = await MovieDb.movies.poster(278, 220, 330)

```

### *Return* 

```
https://www.themoviedb.org/t/p/w1280//9Fgs1ewIZiBBTto1XDHeBN0D8ug.jpg
```
