const db = require('../config/db');

// Create a new internship description
async function createDescription(internshipID, title, internDescription, internWeeks, hoursPerWeek, internLocation, majorsOfInterest, salary, internStatus) {
  const [result] = await db.query(
    `INSERT INTO InternshipDescription 
     (internshipID, title, internDescription, internWeeks, hoursPerWeek, internLocation, majorsOfInterest, salary, internStatus) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [internshipID, title, internDescription, internWeeks, hoursPerWeek, internLocation, majorsOfInterest, salary, internStatus]
  );
  return result; // composite PK, no insertId
}

// Get all descriptions
async function getAllDescriptions() {
  const [rows] = await db.query('SELECT * FROM InternshipDescription');
  return rows;
}

// Get description by composite key
async function getDescriptionByKey(title, internDescription) {
  const [[row]] = await db.query(
    'SELECT * FROM InternshipDescription WHERE title=? AND internDescription=?',
    [title, internDescription]
  );
  return row;
}

// Delete description
async function deleteDescription(title, internDescription) {
  await db.query(
    'DELETE FROM InternshipDescription WHERE title=? AND internDescription=?',
    [title, internDescription]
  );
  return true;
}

module.exports = { createDescription, getAllDescriptions, getDescriptionByKey, deleteDescription };