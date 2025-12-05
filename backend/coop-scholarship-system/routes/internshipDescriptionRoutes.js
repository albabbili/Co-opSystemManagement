const express = require('express');
const router = express.Router();
const internshipDescriptionController = require('../controllers/internshipDescriptionController');

// CRUD endpoints
router.post('/', internshipDescriptionController.createDescription);
router.get('/', internshipDescriptionController.getDescriptions);
router.get('/:title/:internDescription', internshipDescriptionController.getDescription);
router.delete('/:title/:internDescription', internshipDescriptionController.deleteDescription);

module.exports = router;