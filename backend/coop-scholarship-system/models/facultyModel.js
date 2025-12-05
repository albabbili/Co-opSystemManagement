const db = require('../config/db');

// Create a new faculty record
async function createFaculty(userID, departmentID) {
  const [result] = await db.query(
    'INSERT INTO Faculty (userID, departmentID) VALUES (?, ?)',
    [userID, departmentID]
  );
  return result.insertId; // AUTO_INCREMENT facultyID returned
}

// Get all faculty
async function getAllFaculty() {
  const [rows] = await db.query('SELECT * FROM Faculty');
  return rows;
}

// Get faculty by ID
async function getFacultyById(facultyID) {
  const [[faculty]] = await db.query('SELECT * FROM Faculty WHERE facultyID=?', [facultyID]);
  return faculty;
}

// Delete faculty
async function deleteFaculty(facultyID) {
  await db.query('DELETE FROM Faculty WHERE facultyID=?', [facultyID]);
  return true;
}

module.exports = { createFaculty, getAllFaculty, getFacultyById, deleteFaculty };