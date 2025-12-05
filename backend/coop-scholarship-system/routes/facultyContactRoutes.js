const express = require('express');
const router = express.Router();
const facultyContactController = require('../controllers/facultyContactController');

// CRUD endpoints
router.post('/', facultyContactController.createContact);
router.get('/', facultyContactController.getContacts);
router.get('/:email', facultyContactController.getContact);
router.delete('/:email', facultyContactController.deleteContact);

module.exports = router;