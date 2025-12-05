const Employer = require('../models/employerModel');

// Create new employer
exports.createEmployer = async (req, res) => {
  try {
    const { userID } = req.body;
    if (!userID) {
      return res.status(400).json({ error: 'userID is required' });
    }
    const employeeID = await Employer.createEmployer(userID);
    res.status(201).json({ employeeID, userID });
  } catch (err) {
    console.error('Error creating employer:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all employers
exports.getEmployers = async (req, res) => {
  try {
    const employers = await Employer.getAllEmployers();
    res.json(employers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get employer by ID
exports.getEmployer = async (req, res) => {
  try {
    const employer = await Employer.getEmployerById(req.params.id);
    if (!employer) return res.status(404).json({ error: 'Employer not found' });
    res.json(employer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete employer
exports.deleteEmployer = async (req, res) => {
  try {
    await Employer.deleteEmployer(req.params.id);
    res.json({ message: 'Employer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};