const express = require('express');

const { getAllStudents, getSingleStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

const router = express.Router();


// GET | www.localhost:3002/api/v1/students
router.get('/', getAllStudents);

// GET | www.localhost:3002/api/v1/students/76453
router.get('/:id', getSingleStudent);

// POST | www.localhost:3002/api/v1/students
router.post('/', createStudent);

// PUT | www.localhost:3002/api/v1/students/76453
router.put('/:id', updateStudent);

// DELETE | www.localhost:3002/api/v1/students/76453
router.delete('/:id', deleteStudent);


module.exports = router;