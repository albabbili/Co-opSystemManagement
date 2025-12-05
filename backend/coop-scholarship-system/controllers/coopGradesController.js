const CoopGrades = require('../models/coopGradesModel');

// Create new coop grade record
exports.createCoopGrade = async (req, res) => {
  try {
    const { studentID, internshipID, grade } = req.body;
    if (!studentID || !internshipID || !grade) {
      return res.status(400).json({ error: 'studentID, internshipID, and grade are required' });
    }
    await CoopGrades.createCoopGrade(studentID, internshipID, grade);
    res.status(201).json({ studentID, internshipID, grade });
  } catch (err) {
    console.error('Error creating coop grade:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all coop grades
exports.getCoopGrades = async (req, res) => {
  try {
    const grades = await CoopGrades.getAllCoopGrades();
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get coop grade by student and internship
exports.getCoopGrade = async (req, res) => {
  try {
    const { studentID, internshipID } = req.params;
    const grade = await CoopGrades.getCoopGrade(studentID, internshipID);
    if (!grade) return res.status(404).json({ error: 'Coop grade not found' });
    res.json(grade);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete coop grade record
exports.deleteCoopGrade = async (req, res) => {
  try {
    const { studentID, internshipID } = req.params;
    await CoopGrades.deleteCoopGrade(studentID, internshipID);
    res.json({ message: 'Coop grade deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};