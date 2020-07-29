/* eslint-disable no-console */
/* eslint-disable strict */

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');


//console.log(process.env.API_TOKEN);

//IMPORT JSON MOVIE DATABASE
const MOVIEDEX = require('./movies-data-small.json');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());


//VALIDATION OF API_TOKEN 
app.use(function validateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authToken = req.get('Authorization');

  if (!authToken || authToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'I\'m sorry Dave you cannot access the database.' }); //<---- LOL - I MADE A REF TO '2001: A Space Odyssey'
  }
//MOVE TO NEXT MIDDLEWARE
  next();
});


//GET MOVIE DATA WITH HANDLER FUNCTION AT '/movie' ENDPOINT
app.get('/movie', function handleGetMovie(req, res) {

  const { title, genre, country, avg_vote } = req.query;

  let response = MOVIEDEX;
  
//FILTER BY TITLE (just for good measure!!!)
  if(title) {
    response = response.filter(movie =>
      movie.film_title.toLowerCase().includes(title.toLowerCase())
    );
  }
  
//FILTER BY GENRE  
  if(genre) {
    response = response.filter(movie =>
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }
  
//FILTER BY COUNTRY  
  if(country) {
    response = response.filter(movie =>
      movie.country.toLowerCase().includes(country.toLowerCase())
    );
  }

//FILTER BY AVERAGE VOTE 
  if(avg_vote) {
    response = response.filter(movie => 
      movie.avg_vote >= Number(avg_vote)
    );
  }
  
  
  res.json(response);
  
});


const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});





// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// V
// --------->  ENJOY YOUR MOVIES DAVE.....LOL /////////////////
///////////////////////////////////////////////////////////////
