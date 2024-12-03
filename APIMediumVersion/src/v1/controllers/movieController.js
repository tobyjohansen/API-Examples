const { getAllObjects, addObject, getObjectById, deleteObjectById, updateObjectById } = require("../data/databaseGeneric");

const getAllMovies = async (req, res) => {
    try {
        const movies = await getAllObjects();
        res.status(200).json({ success: true, data: movies });
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ success: false, error: "internal server error" });
    }
};


const getSingleMovie = async (req, res) => {
    try {
        const movie = await getObjectById(req.params.id);
        if (movie) {
            res.status(200).json({ success: true, data: movie });
        } else {
            res.status(404).json({ success: false, error: "Movie not found" });
        }
    } catch (error) {
        console.error("Error fetching movie:", error);
        res.status(500).json({ success: false, error: "internal server error" });
    }
};

const createMovie = async (req, res) => {
    try {
        const { title, director, year } = req.body;


        // input validation
        if (!title || !director || !year) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        if (typeof year !== 'number' || year < 1800 || year > new Date().getFullYear()) {
            return res.status(400).json({ success: false, error: "Invalid year" });
        }


        const newMovie = await addObject({ title, director, year });
        res.status(201).json({ success: true, data: newMovie });
    } catch (error) {
        console.error("Error creating movie:", error);
        res.status(500).json({ success: false, error: "internal server error" });
    }
};


const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, director, year } = req.body;

        // input validation
        if (!title && !director && !year) {
            return res.status(400).json({ success: false, error: "At least one field (title, director, year) must be provided" });
        }

        const updatedMovie = await updateObjectById(id, { title, director, year });

        if (updatedMovie) {
            res.status(200).json({ success: true, data: updatedMovie });
        } else {
            res.status(404).json({ success: false, error: "Movie not found" });
        }
    } catch (error) {
        console.error("Error updating movie:", error);
        res.status(500).json({ success: false, error: "internal server error" });
    }
};


const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteObjectById(id);

        if (deleted) {
            res.status(200).json({ success: true, message: "Movie deleted successfully" });
        } else {
            res.status(404).json({ success: false, error: "Movie not found" });
        }
    } catch (error) {
        console.error("Error deleting movie:", error);
        res.status(500).json({ success: false, error: "internal server error" });
    }
};


module.exports = {
    getAllMovies,
    getSingleMovie,
    createMovie,
    updateMovie,
    deleteMovie
};