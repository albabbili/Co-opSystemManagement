const db = require('../config/db');

// Create a new faculty contact
async function createContact(facultyEmail, facultyName, facultyID) {
  const [result] = await db.query(
    'INSERT INTO FacultyContact (facultyEmail, facultyName, facultyID) VALUES (?, ?, ?)',
    [facultyEmail, facultyName, facultyID]
  );
  return result; // PK is facultyEmail, so insertId is not meaningful
}

// Get all contacts
async function getAllContacts() {
  const [rows] = await db.query('SELECT * FROM FacultyContact');
  return rows;
}

// Get contact by email
async function getContactByEmail(facultyEmail) {
  const [[contact]] = await db.query('SELECT * FROM FacultyContact WHERE facultyEmail=?', [facultyEmail]);
  return contact;
}

// Delete contact
async function deleteContact(facultyEmail) {
  await db.query('DELETE FROM FacultyContact WHERE facultyEmail=?', [facultyEmail]);
  return true;
}

module.exports = { createContact, getAllContacts, getContactByEmail, deleteContact };