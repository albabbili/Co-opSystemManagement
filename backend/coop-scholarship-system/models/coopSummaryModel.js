const db = require('../config/db');

// Create a new coop summary
async function createCoopSummary(studentID, internshipID, coopSummary) {
  const [result] = await db.query(
    'INSERT INTO CoopSummary (studentID, internshipID, coopSummary) VALUES (?, ?, ?)',
    [studentID, internshipID, coopSummary]
  );
  return result; // PK is coopSummary, so insertId is not meaningful
}

// Get all coop summaries
async function getAllCoopSummaries() {
  const [rows] = await db.query('SELECT * FROM CoopSummary');
  return rows;
}

// Get coop summary by primary key (coopSummary string)
async function getCoopSummaryByKey(coopSummary) {
  const [[row]] = await db.query('SELECT * FROM CoopSummary WHERE coopSummary=?', [coopSummary]);
  return row;
}

// Delete coop summary
async function deleteCoopSummary(coopSummary) {
  await db.query('DELETE FROM CoopSummary WHERE coopSummary=?', [coopSummary]);
  return true;
}

module.exports = { createCoopSummary, getAllCoopSummaries, getCoopSummaryByKey, deleteCoopSummary };