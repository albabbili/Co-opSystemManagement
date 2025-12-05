const express = require('express');
const router = express.Router();
const coopEligibilityController = require('../controllers/coopEligibilityController');

// CRUD endpoints
router.post('/', coopEligibilityController.createEligibility);
router.get('/', coopEligibilityController.getEligibilityRecords);
router.get('/:id', coopEligibilityController.getEligibilityRecord);
router.delete('/:id', coopEligibilityController.deleteEligibilityRecord);

module.exports = router;