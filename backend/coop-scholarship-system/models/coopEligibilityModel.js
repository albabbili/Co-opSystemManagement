const db = require('../config/db');

// Create a new eligibility record
async function createEligibility(studentID, internshipID, isEligible) {
  const [result] = await db.query(
    'INSERT INTO CoopEligibility (studentID, internshipID, isEligible) VALUES (?, ?, ?)',
    [studentID, internshipID, isEligible]
  );
  return result.insertId; // AUTO_INCREMENT eligibilityID returned
}

// Get all eligibility records
async function getAllEligibility() {
  const [rows] = await db.query('SELECT * FROM CoopEligibility');
  return rows;
}

// Get eligibility by ID
async function getEligibilityById(eligibilityID) {
  const [[eligibility]] = await db.query('SELECT * FROM CoopEligibility WHERE eligibilityID=?', [eligibilityID]);
  return eligibility;
}

// Delete eligibility record
async function deleteEligibility(eligibilityID) {
  await db.query('DELETE FROM CoopEligibility WHERE eligibilityID=?', [eligibilityID]);
  return true;
}

module.exports = { createEligibility, getAllEligibility, getEligibilityById, deleteEligibility };