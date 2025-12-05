const express = require('express');
const router = express.Router();
const employerContactController = require('../controllers/employerContactController');

// CRUD endpoints
router.post('/', employerContactController.createContact);
router.get('/', employerContactController.getContacts);
router.get('/:email', employerContactController.getContact);
router.delete('/:email', employerContactController.deleteContact);

module.exports = router;