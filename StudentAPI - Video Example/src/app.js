const express = require('express');

const studentRoutes = require('./v1/routes/studentRoutes');


const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());


// Setup Routes | www.localhost:3002/api/v1/students
app.use('/api/v1/students', studentRoutes);


app.listen(3002, () => {
    console.log('Server running on port 3002');
})