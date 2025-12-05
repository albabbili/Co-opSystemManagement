const FacultyContact = require('../models/facultyContactModel');

// Create new contact
exports.createContact = async (req, res) => {
  try {
    const { facultyEmail, facultyName, facultyID } = req.body;
    if (!facultyEmail || !facultyName || !facultyID) {
      return res.status(400).json({ error: 'facultyEmail, facultyName, and facultyID are required' });
    }
    await FacultyContact.createContact(facultyEmail, facultyName, facultyID);
    res.status(201).json({ facultyEmail, facultyName, facultyID });
  } catch (err) {
    console.error('Error creating faculty contact:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await FacultyContact.getAllContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get contact by email
exports.getContact = async (req, res) => {
  try {
    const contact = await FacultyContact.getContactByEmail(req.params.email);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    await FacultyContact.deleteContact(req.params.email);
    res.json({ message: 'Faculty contact deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};