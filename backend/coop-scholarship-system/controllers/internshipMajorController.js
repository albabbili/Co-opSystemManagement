const InternshipMajor = require('../models/internshipMajorModel');

// Create new relation
exports.createInternshipMajor = async (req, res) => {
  try {
    const { internshipID, majorID } = req.body;
    if (!internshipID || !majorID) {
      return res.status(400).json({ error: 'internshipID and majorID are required' });
    }
    await InternshipMajor.createInternshipMajor(internshipID, majorID);
    res.status(201).json({ internshipID, majorID });
  } catch (err) {
    console.error('Error creating internship-major relation:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all relations
exports.getInternshipMajors = async (req, res) => {
  try {
    const relations = await InternshipMajor.getAllInternshipMajors();
    res.json(relations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get majors by internship
exports.getMajorsByInternship = async (req, res) => {
  try {
    const majors = await InternshipMajor.getMajorsByInternship(req.params.internshipID);
    res.json(majors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get internships by major
exports.getInternshipsByMajor = async (req, res) => {
  try {
    const internships = await InternshipMajor.getInternshipsByMajor(req.params.majorID);
    res.json(internships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete relation
exports.deleteInternshipMajor = async (req, res) => {
  try {
    const { internshipID, majorID } = req.params;
    await InternshipMajor.deleteInternshipMajor(internshipID, majorID);
    res.json({ message: 'Relation deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};