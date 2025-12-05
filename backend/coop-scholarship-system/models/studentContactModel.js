const db = require('../config/db');

// Create a new student contact
async function createContact(studentEmail, studentName, studentPhone, studentID) {
  const [result] = await db.query(
    'INSERT INTO StudentContact (studentEmail, studentName, studentPhone, studentID) VALUES (?, ?, ?, ?)',
    [studentEmail, studentName, studentPhone, studentID]
  );
  return result; // PK is studentEmail, so insertId is not meaningful
}

// Get all contacts
async function getAllContacts() {
  const [rows] = await db.query('SELECT * FROM StudentContact');
  return rows;
}

// Get contact by email
async function getContactByEmail(studentEmail) {
  const [[contact]] = await db.query('SELECT * FROM StudentContact WHERE studentEmail=?', [studentEmail]);
  return contact;
}

// Delete contact
async function deleteContact(studentEmail) {
  await db.query('DELETE FROM StudentContact WHERE studentEmail=?', [studentEmail]);
  return true;
}

module.exports = { createContact, getAllContacts, getContactByEmail, deleteContact };