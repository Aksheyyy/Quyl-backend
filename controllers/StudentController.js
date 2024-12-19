const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create student
const createStudent = async (req, res) => {
  try {
    const { name, cohort,course, status } = req.body;    
    const newStudent = await prisma.student.create({
      data: { name, cohort,course, status },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await prisma.student.findUnique({
      where: { id: parseInt(id) },
    });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, cohort,course, status } = req.body;
    const updatedStudent = await prisma.student.update({
      where: { id: parseInt(id) },
      data: { name, cohort, course, status },
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.student.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent};
