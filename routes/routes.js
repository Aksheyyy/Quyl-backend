const express = require('express');
const router = express.Router();
const {createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent} = require('../controllers/StudentController');


router.post('/add-student', createStudent); 
router.get('/students', getAllStudents); 
router.get('/student/:id', getStudentById); 
router.put('/update/:id', updateStudent); 
router.delete('/delete/:id', deleteStudent); 

module.exports = router;
