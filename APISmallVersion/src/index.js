// Import required modules and set up the Express app
const express = require('express');
const { getMovies, addMovie, getMovieById, deleteMovieById, updateMovieById } = require('./database');
const app = express();
const cors = require('cors');




// creates a middleware that parses incoming data as JSON to req.body
app.use(express.json());
// creates a middleware that allows cross-origin requests
app.use(cors());




// GET /api/movies
app.get('/api/movies', (req, res) => {
  res.json(getMovies());
});


// GET /api/movies/:id
app.get('/api/movies/:id', (req, res) => {
  console.log(req.params.id);
  const movie = getMovieById(req.params.id);
  if (movie) {
    console.log(movie);
    res.json(movie);
  } else {
    res.status(404).send('Movie not found');
  }
});


// POST /api/movies
app.post('/api/movies', (req, res) => {
  const { title, director, year } = req.body;
  if (!title || !director || !year) {
      res.status(400).send('Missing required fields');
  } else {
      const newMovie = addMovie({ title, director, year });
      res.status(201).json(newMovie);
  }
});


// UPDATE /api/movies/:id
app.put('/api/movies/:id', (req, res) => {
    const id = req.params.id;
    const { title, director, year } = req.body;

    const updatedMovie = updateMovieById(id, { title, director, year });

    if (updatedMovie) {
        res.json(updatedMovie);
    } else {
        res.status(404).send('Movie not found');
    }
});


// DELETE /api/movies/:id
app.delete('/api/movies/:id', (req, res) => {
    const id = req.params.id;
    const deleted = deleteMovieById(id);

    if (deleted) {
        res.sendStatus(204).send('Movie deleted');
    } else {
        res.status(404).send('Movie not found');
    }
});




// Start the server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
