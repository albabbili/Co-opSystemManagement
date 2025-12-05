const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

// CRUD endpoints
router.post('/', facultyController.createFaculty);
router.get('/', facultyController.getFaculty);
router.get('/:id', facultyController.getFacultyById);
router.delete('/:id', facultyController.deleteFaculty);

module.exports = router;