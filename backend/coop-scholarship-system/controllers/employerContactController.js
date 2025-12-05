const EmployerContact = require('../models/employerContactModel');

// Create new contact
exports.createContact = async (req, res) => {
  try {
    const { contactEmail, contactName, contactPhone, employeeID } = req.body;
    if (!contactEmail || !contactName || !employeeID) {
      return res.status(400).json({ error: 'contactEmail, contactName, and employeeID are required' });
    }
    await EmployerContact.createContact(contactEmail, contactName, contactPhone, employeeID);
    res.status(201).json({ contactEmail, contactName, contactPhone, employeeID });
  } catch (err) {
    console.error('Error creating contact:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await EmployerContact.getAllContacts();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get contact by email
exports.getContact = async (req, res) => {
  try {
    const contact = await EmployerContact.getContactByEmail(req.params.email);
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    await EmployerContact.deleteContact(req.params.email);
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};