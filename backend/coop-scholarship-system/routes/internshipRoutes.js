const express = require('express');
const router = express.Router();
const internshipController = require('../controllers/internshipController');

// CRUD endpoints
router.post('/', internshipController.createInternship);
router.get('/', internshipController.getInternships);
router.get('/:id', internshipController.getInternship);
router.delete('/:id', internshipController.deleteInternship);

module.exports = router;