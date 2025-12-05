const Student = require('../models/studentModel');

// Create new student
exports.createStudent = async (req, res) => {
  try {
    const { userID, departmentID, resumeURL } = req.body;
    if (!userID || !departmentID) {
      return res.status(400).json({ error: 'userID and departmentID are required' });
    }
    const studentID = await Student.createStudent(userID, departmentID, resumeURL);
    res.status(201).json({ studentID, userID, departmentID, resumeURL });
  } catch (err) {
    console.error('Error creating student:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get student by ID
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.deleteStudent(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};