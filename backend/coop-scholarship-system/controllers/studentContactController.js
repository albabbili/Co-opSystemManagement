const StudentContact = require('../models/studentContactModel');

// Create new contact
exports.createContact = async (req, res) => {
  try {
    const { studentEmail, studentName, studentPhone, studentID } = req.body;
    if (!studentEmail || !studentName || !studentID) {
      return res.status(400).json({ error: 'studentEmail, studentName, and studentID are required' });
    }
    await StudentContact.createContact(studentEmail, studentName, studentPhone, studentID);
    res.status(201).json({ studentEmail, studentName, studentPhone, studentID });
  } catch (err) {
    console.error('Error creating student contact:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await StudentContact.getAllContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get contact by email
exports.getContact = async (req, res) => {
  try {
    const contact = await StudentContact.getContactByEmail(req.params.email);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    await StudentContact.deleteContact(req.params.email);
    res.json({ message: 'Student contact deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};