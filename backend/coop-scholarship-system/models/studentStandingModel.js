const db = require('../config/db');

// Create a new student standing record
async function createStanding(standing, studentID, majorID, creditHoursComplete, gpa, startSemester, startYear, isTransfer) {
  const [result] = await db.query(
    `INSERT INTO StudentStanding 
     (standing, studentID, majorID, creditHoursComplete, gpa, startSemester, startYear, isTransfer) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [standing, studentID, majorID, creditHoursComplete, gpa, startSemester, startYear, isTransfer]
  );
  return result; // PK is standing (string), so insertId is not meaningful
}

// Get all standings
async function getAllStandings() {
  const [rows] = await db.query('SELECT * FROM StudentStanding');
  return rows;
}

// Get standing by primary key (standing string)
async function getStandingByKey(standing) {
  const [[row]] = await db.query('SELECT * FROM StudentStanding WHERE standing=?', [standing]);
  return row;
}

// Delete standing
async function deleteStanding(standing) {
  await db.query('DELETE FROM StudentStanding WHERE standing=?', [standing]);
  return true;
}

module.exports = { createStanding, getAllStandings, getStandingByKey, deleteStanding };