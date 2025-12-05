const express = require('express');
const router = express.Router();
const studentApplicationController = require('../controllers/studentApplicationController');

// CRUD endpoints
router.post('/', studentApplicationController.createApplication);
router.get('/', studentApplicationController.getApplications);
router.get('/:id', studentApplicationController.getApplication);
router.delete('/:id', studentApplicationController.deleteApplication);

module.exports = router;