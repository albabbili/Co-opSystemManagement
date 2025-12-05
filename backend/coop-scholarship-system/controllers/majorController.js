const Major = require('../models/majorModel');

// Create new major
exports.createMajor = async (req, res) => {
  try {
    const { majorDescription } = req.body;
    if (!majorDescription) {
      return res.status(400).json({ error: 'majorDescription is required' });
    }
    const majorID = await Major.createMajor(majorDescription);
    res.status(201).json({ majorID, majorDescription });
  } catch (err) {
    console.error('Error creating major:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all majors
exports.getMajors = async (req, res) => {
  try {
    const majors = await Major.getAllMajors();
    res.json(majors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get major by ID
exports.getMajor = async (req, res) => {
  try {
    const major = await Major.getMajorById(req.params.id);
    if (!major) return res.status(404).json({ error: 'Major not found' });
    res.json(major);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete major
exports.deleteMajor = async (req, res) => {
  try {
    await Major.deleteMajor(req.params.id);
    res.json({ message: 'Major deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};