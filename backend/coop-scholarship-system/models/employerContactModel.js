const db = require('../config/db');

// Create a new employer contact
async function createContact(contactEmail, contactName, contactPhone, employeeID) {
  const [result] = await db.query(
    'INSERT INTO EmployerContact (contactEmail, contactName, contactPhone, employeeID) VALUES (?, ?, ?, ?)',
    [contactEmail, contactName, contactPhone, employeeID]
  );
  return result; // PK is contactEmail, so insertId is not meaningful
}

// Get all contacts
async function getAllContacts() {
  const [rows] = await db.query('SELECT * FROM EmployerContact');
  return rows;
}

// Get contact by email
async function getContactByEmail(contactEmail) {
  const [[contact]] = await db.query('SELECT * FROM EmployerContact WHERE contactEmail=?', [contactEmail]);
  return contact;
}

// Delete contact
async function deleteContact(contactEmail) {
  await db.query('DELETE FROM EmployerContact WHERE contactEmail=?', [contactEmail]);
  return true;
}

module.exports = { createContact, getAllContacts, getContactByEmail, deleteContact };