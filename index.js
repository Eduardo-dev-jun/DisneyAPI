const express = require('express');
const app = express();
const fs = require('fs');


const disneyMovies = JSON.parse(fs.readFileSync('disney_movies.json'));


app.get('/filters', (req, res) => {
  const years = [...new Set(disneyMovies.map(movie => movie.release_date.split('/')[2]))];
  const genres = [...new Set(disneyMovies.map(movie => movie.genre))];
  res.json({ years, genres });
});


app.get('/movies', (req, res) => {
  const years = req.query.years ? req.query.years.split(',') : [];
  const genres = req.query.genre ? req.query.genre.split(',') : [];
  
  console.log(req.query)

  const filteredMovies = disneyMovies.filter(movie => {
    return (years.length === 0 || years.includes(movie.release_date.split('/')[2])) &&
           (genres.length === 0 || genres.includes(movie.genre));
  });
  
  res.json(filteredMovies);
});


app.listen(8800, () => {
  console.log('Server is running on port 8800');
});
