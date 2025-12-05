const CoopEligibility = require('../models/coopEligibilityModel');

// Create new eligibility record
exports.createEligibility = async (req, res) => {
  try {
    const { studentID, internshipID, isEligible } = req.body;
    if (!studentID || !internshipID || !isEligible) {
      return res.status(400).json({ error: 'studentID, internshipID, and isEligible are required' });
    }
    const eligibilityID = await CoopEligibility.createEligibility(studentID, internshipID, isEligible);
    res.status(201).json({ eligibilityID, studentID, internshipID, isEligible });
  } catch (err) {
    console.error('Error creating eligibility record:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all eligibility records
exports.getEligibilityRecords = async (req, res) => {
  try {
    const records = await CoopEligibility.getAllEligibility();
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get eligibility by ID
exports.getEligibilityRecord = async (req, res) => {
  try {
    const record = await CoopEligibility.getEligibilityById(req.params.id);
    if (!record) return res.status(404).json({ error: 'Eligibility record not found' });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete eligibility record
exports.deleteEligibilityRecord = async (req, res) => {
  try {
    await CoopEligibility.deleteEligibility(req.params.id);
    res.json({ message: 'Eligibility record deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};