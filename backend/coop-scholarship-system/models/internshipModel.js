const db = require('../config/db');

// Create a new internship
async function createInternship(employeeID) {
  const [result] = await db.query(
    'INSERT INTO Internship (employeeID) VALUES (?)',
    [employeeID]
  );
  return result.insertId; // AUTO_INCREMENT internshipID returned
}

// Get all internships
async function getAllInternships() {
  const [rows] = await db.query('SELECT * FROM Internship');
  return rows;
}

// Get internship by ID
async function getInternshipById(internshipID) {
  const [[internship]] = await db.query('SELECT * FROM Internship WHERE internshipID=?', [internshipID]);
  return internship;
}

// Delete internship
async function deleteInternship(internshipID) {
  await db.query('DELETE FROM Internship WHERE internshipID=?', [internshipID]);
  return true;
}

module.exports = { createInternship, getAllInternships, getInternshipById, deleteInternship };