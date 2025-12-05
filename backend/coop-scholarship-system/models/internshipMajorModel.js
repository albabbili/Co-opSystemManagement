const db = require('../config/db');

// Create a new internship-major relation
async function createInternshipMajor(internshipID, majorID) {
  const [result] = await db.query(
    'INSERT INTO InternshipMajor (internshipID, majorID) VALUES (?, ?)',
    [internshipID, majorID]
  );
  return result; // composite key, no insertId
}

// Get all internship-major relations
async function getAllInternshipMajors() {
  const [rows] = await db.query('SELECT * FROM InternshipMajor');
  return rows;
}

// Get majors for a specific internship
async function getMajorsByInternship(internshipID) {
  const [rows] = await db.query('SELECT * FROM InternshipMajor WHERE internshipID=?', [internshipID]);
  return rows;
}

// Get internships for a specific major
async function getInternshipsByMajor(majorID) {
  const [rows] = await db.query('SELECT * FROM InternshipMajor WHERE majorID=?', [majorID]);
  return rows;
}

// Delete relation
async function deleteInternshipMajor(internshipID, majorID) {
  await db.query('DELETE FROM InternshipMajor WHERE internshipID=? AND majorID=?', [internshipID, majorID]);
  return true;
}

module.exports = { 
  createInternshipMajor, 
  getAllInternshipMajors, 
  getMajorsByInternship, 
  getInternshipsByMajor, 
  deleteInternshipMajor 
};