const express = require('express');
const router = express.Router();
const employerController = require('../controllers/employerController');

// CRUD endpoints
router.post('/', employerController.createEmployer);
router.get('/', employerController.getEmployers);
router.get('/:id', employerController.getEmployer);
router.delete('/:id', employerController.deleteEmployer);

module.exports = router;