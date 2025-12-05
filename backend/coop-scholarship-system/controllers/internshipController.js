const Internship = require('../models/internshipModel');

// Create new internship
exports.createInternship = async (req, res) => {
  try {
    const { employeeID } = req.body;
    if (!employeeID) {
      return res.status(400).json({ error: 'employeeID is required' });
    }
    const internshipID = await Internship.createInternship(employeeID);
    res.status(201).json({ internshipID, employeeID });
  } catch (err) {
    console.error('Error creating internship:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all internships
exports.getInternships = async (req, res) => {
  try {
    const internships = await Internship.getAllInternships();
    res.json(internships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get internship by ID
exports.getInternship = async (req, res) => {
  try {
    const internship = await Internship.getInternshipById(req.params.id);
    if (!internship) return res.status(404).json({ error: 'Internship not found' });
    res.json(internship);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete internship
exports.deleteInternship = async (req, res) => {
  try {
    await Internship.deleteInternship(req.params.id);
    res.json({ message: 'Internship deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};