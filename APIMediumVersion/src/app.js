const express = require('express');
const movieRoutes = require('./v1/routes/movieRoutes');


const app = express();
const cors = require('cors');

// Middleware for parsing JSON
app.use(express.json());

app.use(cors());

// Set up routes
app.use('/api/v1/movies', movieRoutes);



// Start the server
app.listen(3001, () => {
    console.log('Server started on port 3001');
});