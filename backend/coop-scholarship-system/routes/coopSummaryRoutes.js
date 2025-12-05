const express = require('express');
const router = express.Router();
const coopSummaryController = require('../controllers/coopSummaryController');

// CRUD endpoints
router.post('/', coopSummaryController.createCoopSummary);
router.get('/', coopSummaryController.getCoopSummaries);
router.get('/:summary', coopSummaryController.getCoopSummary);
router.delete('/:summary', coopSummaryController.deleteCoopSummary);

module.exports = router;