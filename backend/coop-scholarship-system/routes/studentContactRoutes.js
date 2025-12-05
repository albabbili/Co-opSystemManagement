const express = require('express');
const router = express.Router();
const studentContactController = require('../controllers/studentContactController');

// CRUD endpoints
router.post('/', studentContactController.createContact);
router.get('/', studentContactController.getContacts);
router.get('/:email', studentContactController.getContact);
router.delete('/:email', studentContactController.deleteContact);

module.exports = router;