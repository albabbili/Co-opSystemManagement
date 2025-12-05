const db = require('../config/db');

// Create a new department
async function createDepartment(departmentDescription) {
  const [result] = await db.query(
    'INSERT INTO Department (departmentDescription) VALUES (?)',
    [departmentDescription]
  );
  return result.insertId; // AUTO_INCREMENT departmentID returned
}

// Get all departments
async function getAllDepartments() {
  const [rows] = await db.query('SELECT * FROM Department');
  return rows;
}

// Get department by ID
async function getDepartmentById(departmentID) {
  const [[department]] = await db.query('SELECT * FROM Department WHERE departmentID=?', [departmentID]);
  return department;
}

// Delete department
async function deleteDepartment(departmentID) {
  await db.query('DELETE FROM Department WHERE departmentID=?', [departmentID]);
  return true;
}

module.exports = { createDepartment, getAllDepartments, getDepartmentById, deleteDepartment };