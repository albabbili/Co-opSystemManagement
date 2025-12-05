const express = require('express');
const router = express.Router();
const majorController = require('../controllers/majorController');

// CRUD endpoints
router.post('/', majorController.createMajor);
router.get('/', majorController.getMajors);
router.get('/:id', majorController.getMajor);
router.delete('/:id', majorController.deleteMajor);

module.exports = router;