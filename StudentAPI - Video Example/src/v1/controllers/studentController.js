const { getAllObjects, getObjectById, deleteObjectById, updateObjectById, addObject } = require('../data/databaseGeneric');


const getAllStudents = async (req, res) => {
    try {
        const students = await getAllObjects();
        res.status(200).json({ sucess: true, data: students});
    } catch (error) {
        res.status(500).json({ sucess: false, error: "Something went wrong" });
    }
};




const getSingleStudent = async (req, res) => {
    try {
        const student = await getObjectById(req.params.id);

        res.status(200).json({ sucess: true, data: student});

    } catch (error) {
        res.status(500).json({ sucess: false, error: "Something went wrong" });
    }
};



const createStudent = async (req, res) => {
    try {
        const { name, age } = req.body;

        const newStudent = await addObject({ name, age });

        res.status(201).json({ sucess: true, data: newStudent});

    } catch (error) {
        res.status(500).json({ sucess: false, error: "Something went wrong" });
    }
};


const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;

        const updatedObject = await updateObjectById(id, { name, age });

        res.status(200).json({ sucess: true, data: updatedObject});

    } catch (error) {
        res.status(500).json({ sucess: false, error: "Something went wrong" });
    }
};

const deleteStudent = async (req, res) => {
    try {

        const { id } = req.params;
        const deleted = await deleteObjectById(id);

        res.status(200).json({ sucess: true, message: "Student deleted" });

    } catch (error) {
        res.status(500).json({ sucess: false, error: "Something went wrong" });
    }
};


module.exports = { getAllStudents, getSingleStudent, createStudent, updateStudent, deleteStudent };