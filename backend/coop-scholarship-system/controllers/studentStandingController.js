const StudentStanding = require('../models/studentStandingModel');

// Create new standing
exports.createStanding = async (req, res) => {
  try {
    const { standing, studentID, majorID, creditHoursComplete, gpa, startSemester, startYear, isTransfer } = req.body;
    if (!standing || !studentID || !majorID) {
      return res.status(400).json({ error: 'standing, studentID, and majorID are required' });
    }
    await StudentStanding.createStanding(standing, studentID, majorID, creditHoursComplete, gpa, startSemester, startYear, isTransfer);
    res.status(201).json({ standing, studentID, majorID, creditHoursComplete, gpa, startSemester, startYear, isTransfer });
  } catch (err) {
    console.error('Error creating student standing:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all standings
exports.getStandings = async (req, res) => {
  try {
    const standings = await StudentStanding.getAllStandings();
    res.json(standings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get standing by key
exports.getStanding = async (req, res) => {
  try {
    const standing = await StudentStanding.getStandingByKey(req.params.standing);
    if (!standing) return res.status(404).json({ error: 'Standing not found' });
    res.json(standing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete standing
exports.deleteStanding = async (req, res) => {
  try {
    await StudentStanding.deleteStanding(req.params.standing);
    res.json({ message: 'Standing deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};