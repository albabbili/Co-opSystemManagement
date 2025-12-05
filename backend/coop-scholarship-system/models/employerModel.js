const db = require('../config/db');

// Create a new employer
async function createEmployer(userID) {
  const [result] = await db.query(
    'INSERT INTO Employer (userID) VALUES (?)',
    [userID]
  );
  return result.insertId; // AUTO_INCREMENT employeeID returned
}

// Get all employers
async function getAllEmployers() {
  const [rows] = await db.query('SELECT * FROM Employer');
  return rows;
}

// Get employer by ID
async function getEmployerById(employeeID) {
  const [[employer]] = await db.query('SELECT * FROM Employer WHERE employeeID=?', [employeeID]);
  return employer;
}

// Delete employer
async function deleteEmployer(employeeID) {
  await db.query('DELETE FROM Employer WHERE employeeID=?', [employeeID]);
  return true;
}

module.exports = { createEmployer, getAllEmployers, getEmployerById, deleteEmployer };