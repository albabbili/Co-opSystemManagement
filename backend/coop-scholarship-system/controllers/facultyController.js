const Faculty = require('../models/facultyModel');

// Create new faculty
exports.createFaculty = async (req, res) => {
  try {
    const { userID, departmentID } = req.body;
    if (!userID || !departmentID) {
      return res.status(400).json({ error: 'userID and departmentID are required' });
    }
    const facultyID = await Faculty.createFaculty(userID, departmentID);
    res.status(201).json({ facultyID, userID, departmentID });
  } catch (err) {
    console.error('Error creating faculty:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all faculty
exports.getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.getAllFaculty();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get faculty by ID
exports.getFacultyById = async (req, res) => {
  try {
    const faculty = await Faculty.getFacultyById(req.params.id);
    if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete faculty
exports.deleteFaculty = async (req, res) => {
  try {
    await Faculty.deleteFaculty(req.params.id);
    res.json({ message: 'Faculty deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};