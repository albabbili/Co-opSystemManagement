const StudentApplication = require('../models/studentApplicationModel');

// Create new application
exports.createApplication = async (req, res) => {
  try {
    const { studentID, internshipID, applicationDate } = req.body;
    if (!studentID || !internshipID || !applicationDate) {
      return res.status(400).json({ error: 'studentID, internshipID, and applicationDate are required' });
    }
    const applicationID = await StudentApplication.createApplication(studentID, internshipID, applicationDate);
    res.status(201).json({ applicationID, studentID, internshipID, applicationDate });
  } catch (err) {
    console.error('Error creating application:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all applications
exports.getApplications = async (req, res) => {
  try {
    const applications = await StudentApplication.getAllApplications();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get application by ID
exports.getApplication = async (req, res) => {
  try {
    const application = await StudentApplication.getApplicationById(req.params.id);
    if (!application) return res.status(404).json({ error: 'Application not found' });
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete application
exports.deleteApplication = async (req, res) => {
  try {
    await StudentApplication.deleteApplication(req.params.id);
    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};