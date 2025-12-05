const InternshipDescription = require('../models/internshipDescriptionModel');

// Create new internship description
exports.createDescription = async (req, res) => {
  try {
    const { internshipID, title, internDescription, internWeeks, hoursPerWeek, internLocation, majorsOfInterest, salary, internStatus } = req.body;
    if (!internshipID || !title || !internDescription) {
      return res.status(400).json({ error: 'internshipID, title, and internDescription are required' });
    }
    await InternshipDescription.createDescription(internshipID, title, internDescription, internWeeks, hoursPerWeek, internLocation, majorsOfInterest, salary, internStatus);
    res.status(201).json({ internshipID, title, internDescription, internWeeks, hoursPerWeek, internLocation, majorsOfInterest, salary, internStatus });
  } catch (err) {
    console.error('Error creating internship description:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all descriptions
exports.getDescriptions = async (req, res) => {
  try {
    const descriptions = await InternshipDescription.getAllDescriptions();
    res.json(descriptions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get description by composite key
exports.getDescription = async (req, res) => {
  try {
    const { title, internDescription } = req.params;
    const description = await InternshipDescription.getDescriptionByKey(title, internDescription);
    if (!description) return res.status(404).json({ error: 'Description not found' });
    res.json(description);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete description
exports.deleteDescription = async (req, res) => {
  try {
    const { title, internDescription } = req.params;
    await InternshipDescription.deleteDescription(title, internDescription);
    res.json({ message: 'Internship description deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};