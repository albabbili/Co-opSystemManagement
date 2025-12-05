const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// CRUD endpoints
router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;