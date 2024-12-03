const express = require('express');
const { getAllMovies, getSingleMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');


const router = express.Router();

router.get('/', getAllMovies);
router.get('/:id', getSingleMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;