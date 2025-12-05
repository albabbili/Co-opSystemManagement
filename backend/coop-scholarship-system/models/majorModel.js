const db = require('../config/db');

// Create a new major
async function createMajor(majorDescription) {
  const [result] = await db.query(
    'INSERT INTO Major (majorDescription) VALUES (?)',
    [majorDescription]
  );
  return result.insertId; // AUTO_INCREMENT majorID returned
}

// Get all majors
async function getAllMajors() {
  const [rows] = await db.query('SELECT * FROM Major');
  return rows;
}

// Get major by ID
async function getMajorById(majorID) {
  const [[major]] = await db.query('SELECT * FROM Major WHERE majorID=?', [majorID]);
  return major;
}

// Delete major
async function deleteMajor(majorID) {
  await db.query('DELETE FROM Major WHERE majorID=?', [majorID]);
  return true;
}

module.exports = { createMajor, getAllMajors, getMajorById, deleteMajor };