const CoopSummary = require('../models/coopSummaryModel');

// Create new coop summary
exports.createCoopSummary = async (req, res) => {
  try {
    const { studentID, internshipID, coopSummary } = req.body;
    if (!studentID || !internshipID || !coopSummary) {
      return res.status(400).json({ error: 'studentID, internshipID, and coopSummary are required' });
    }
    await CoopSummary.createCoopSummary(studentID, internshipID, coopSummary);
    res.status(201).json({ studentID, internshipID, coopSummary });
  } catch (err) {
    console.error('Error creating coop summary:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all coop summaries
exports.getCoopSummaries = async (req, res) => {
  try {
    const summaries = await CoopSummary.getAllCoopSummaries();
    res.json(summaries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get coop summary by key
exports.getCoopSummary = async (req, res) => {
  try {
    const summary = await CoopSummary.getCoopSummaryByKey(req.params.summary);
    if (!summary) return res.status(404).json({ error: 'Coop summary not found' });
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete coop summary
exports.deleteCoopSummary = async (req, res) => {
  try {
    await CoopSummary.deleteCoopSummary(req.params.summary);
    res.json({ message: 'Coop summary deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};