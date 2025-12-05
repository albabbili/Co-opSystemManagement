const express = require('express');
const router = express.Router();
const internshipMajorController = require('../controllers/internshipMajorController');

// CRUD endpoints
router.post('/', internshipMajorController.createInternshipMajor);
router.get('/', internshipMajorController.getInternshipMajors);
router.get('/internship/:internshipID', internshipMajorController.getMajorsByInternship);
router.get('/major/:majorID', internshipMajorController.getInternshipsByMajor);
router.delete('/:internshipID/:majorID', internshipMajorController.deleteInternshipMajor);

module.exports = router;