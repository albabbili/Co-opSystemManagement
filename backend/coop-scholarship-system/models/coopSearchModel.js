const db = require('../config/db');

// Create a new coop search relation
async function createCoopSearch(employeeID, companyID, facultyID, departmentID) {
  const [result] = await db.query(
    'INSERT INTO CoopSearch (employeeID, companyID, facultyID, departmentID) VALUES (?, ?, ?, ?)',
    [employeeID, companyID, facultyID, departmentID]
  );
  return result; // composite key, no insertId
}

// Get all coop search relations
async function getAllCoopSearches() {
  const [rows] = await db.query('SELECT * FROM CoopSearch');
  return rows;
}

// Get coop search by composite key
async function getCoopSearch(employeeID, companyID, facultyID, departmentID) {
  const [[row]] = await db.query(
    'SELECT * FROM CoopSearch WHERE employeeID=? AND companyID=? AND facultyID=? AND departmentID=?',
    [employeeID, companyID, facultyID, departmentID]
  );
  return row;
}

// Delete coop search relation
async function deleteCoopSearch(employeeID, companyID, facultyID, departmentID) {
  await db.query(
    'DELETE FROM CoopSearch WHERE employeeID=? AND companyID=? AND facultyID=? AND departmentID=?',
    [employeeID, companyID, facultyID, departmentID]
  );
  return true;
}

module.exports = { createCoopSearch, getAllCoopSearches, getCoopSearch, deleteCoopSearch };