const db = require('../config/db');

// Create a new student application
async function createApplication(studentID, internshipID, applicationDate) {
  const [result] = await db.query(
    'INSERT INTO StudentApplication (studentID, internshipID, applicationDate) VALUES (?, ?, ?)',
    [studentID, internshipID, applicationDate]
  );
  return result.insertId; // AUTO_INCREMENT applicationID returned
}

// Get all applications
async function getAllApplications() {
  const [rows] = await db.query('SELECT * FROM StudentApplication');
  return rows;
}

// Get application by ID
async function getApplicationById(applicationID) {
  const [[application]] = await db.query('SELECT * FROM StudentApplication WHERE applicationID=?', [applicationID]);
  return application;
}

// Delete application
async function deleteApplication(applicationID) {
  await db.query('DELETE FROM StudentApplication WHERE applicationID=?', [applicationID]);
  return true;
}

module.exports = { createApplication, getAllApplications, getApplicationById, deleteApplication };