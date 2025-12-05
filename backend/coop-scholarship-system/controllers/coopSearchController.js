const CoopSearch = require('../models/coopSearchModel');

// Create new coop search relation
exports.createCoopSearch = async (req, res) => {
  try {
    const { employeeID, companyID, facultyID, departmentID } = req.body;
    if (!employeeID || !companyID || !facultyID || !departmentID) {
      return res.status(400).json({ error: 'employeeID, companyID, facultyID, and departmentID are required' });
    }
    await CoopSearch.createCoopSearch(employeeID, companyID, facultyID, departmentID);
    res.status(201).json({ employeeID, companyID, facultyID, departmentID });
  } catch (err) {
    console.error('Error creating coop search relation:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all coop search relations
exports.getCoopSearches = async (req, res) => {
  try {
    const searches = await CoopSearch.getAllCoopSearches();
    res.json(searches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get coop search by composite key
exports.getCoopSearch = async (req, res) => {
  try {
    const { employeeID, companyID, facultyID, departmentID } = req.params;
    const search = await CoopSearch.getCoopSearch(employeeID, companyID, facultyID, departmentID);
    if (!search) return res.status(404).json({ error: 'Coop search relation not found' });
    res.json(search);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete coop search relation
exports.deleteCoopSearch = async (req, res) => {
  try {
    const { employeeID, companyID, facultyID, departmentID } = req.params;
    await CoopSearch.deleteCoopSearch(employeeID, companyID, facultyID, departmentID);
    res.json({ message: 'Coop search relation deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};