
let movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 2, title: 'The Matrix', director: 'The Wachowskis', year: 1999 },
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
    { id: 4, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
    { id: 5, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
];

// Get all movies
const getMovies = () => {
    return movies
}

// Add movie
const addMovie = (movie) => {
    const newMovie = { id: movies.length + 1, ...movie }; // Add a unique id to the movie object based on the length of the movies array
    movies.push(newMovie);
    return newMovie;
}

// Get movie by id
const getMovieById = (id) => {
    return movies.find((movie) => movie.id === parseInt(id)); // // Ensure the id is a number with parseInt
}

// Delete movie by id
const deleteMovieById = (id) => {

    // makes index = id of movie
    const index = movies.findIndex((movie) => movie.id === parseInt(id));

    // Check if index is not -1/does not exist | if it does exist, delete it by splicing. Splicing removes the element at the specified index
    if (index !== -1) {
        movies.splice(index, 1);
        return true;
    }
    return false;
}

// Update movie by id
const updateMovieById = (id, updatedMovie) => {

    // makes index = id of movie | check if id/movie exists | if it does, update it.
    const index = movies.findIndex((movie) => movie.id === parseInt(id));
    if (index !== -1) {
        movies[index] = { ...movies[index], ...updatedMovie };
        return movies[index];
    }
    return null;
}


module.exports = {
    getMovies,
    addMovie,
    getMovieById,
    deleteMovieById,
    updateMovieById
}