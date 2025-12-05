const db = require('../config/db');

// Create a new coop grade record
async function createCoopGrade(studentID, internshipID, grade) {
  const [result] = await db.query(
    'INSERT INTO CoopGrades (studentID, internshipID, grade) VALUES (?, ?, ?)',
    [studentID, internshipID, grade]
  );
  return result; // composite key, no insertId
}

// Get all coop grades
async function getAllCoopGrades() {
  const [rows] = await db.query('SELECT * FROM CoopGrades');
  return rows;
}

// Get coop grade by student and internship
async function getCoopGrade(studentID, internshipID) {
  const [[row]] = await db.query(
    'SELECT * FROM CoopGrades WHERE studentID=? AND internshipID=?',
    [studentID, internshipID]
  );
  return row;
}

// Delete coop grade record
async function deleteCoopGrade(studentID, internshipID) {
  await db.query('DELETE FROM CoopGrades WHERE studentID=? AND internshipID=?', [studentID, internshipID]);
  return true;
}

module.exports = { createCoopGrade, getAllCoopGrades, getCoopGrade, deleteCoopGrade };