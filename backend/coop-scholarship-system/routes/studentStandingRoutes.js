const express = require('express');
const router = express.Router();
const studentStandingController = require('../controllers/studentStandingController');

// CRUD endpoints
router.post('/', studentStandingController.createStanding);
router.get('/', studentStandingController.getStandings);
router.get('/:standing', studentStandingController.getStanding);
router.delete('/:standing', studentStandingController.deleteStanding);

module.exports = router;