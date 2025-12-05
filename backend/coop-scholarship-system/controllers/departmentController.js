const Department = require('../models/departmentModel');

// Create new department
exports.createDepartment = async (req, res) => {
  try {
    const { departmentDescription } = req.body;
    if (!departmentDescription) {
      return res.status(400).json({ error: 'departmentDescription is required' });
    }
    const departmentID = await Department.createDepartment(departmentDescription);
    res.status(201).json({ departmentID, departmentDescription });
  } catch (err) {
    console.error('Error creating department:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all departments
exports.getDepartments = async (req, res) => {
  try {
    const departments = await Department.getAllDepartments();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get department by ID
exports.getDepartment = async (req, res) => {
  try {
    const department = await Department.getDepartmentById(req.params.id);
    if (!department) return res.status(404).json({ error: 'Department not found' });
    res.json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete department
exports.deleteDepartment = async (req, res) => {
  try {
    await Department.deleteDepartment(req.params.id);
    res.json({ message: 'Department deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};