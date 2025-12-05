const Company = require('../models/companyModel');

// Create new company
exports.createCompany = async (req, res) => {
  try {
    const { companyName, companyLocation, companyWebsite, employeeID } = req.body;
    if (!companyName || !employeeID) {
      return res.status(400).json({ error: 'companyName and employeeID are required' });
    }
    const companyID = await Company.createCompany(companyName, companyLocation, companyWebsite, employeeID);
    res.status(201).json({ companyID, companyName, companyLocation, companyWebsite, employeeID });
  } catch (err) {
    console.error('Error creating company:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all companies
exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.getAllCompanies();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get company by ID
exports.getCompany = async (req, res) => {
  try {
    const company = await Company.getCompanyById(req.params.id);
    if (!company) return res.status(404).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete company
exports.deleteCompany = async (req, res) => {
  try {
    await Company.deleteCompany(req.params.id);
    res.json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};