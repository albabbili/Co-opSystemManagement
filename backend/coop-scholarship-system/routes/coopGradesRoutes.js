const express = require('express');
const router = express.Router();
const coopGradesController = require('../controllers/coopGradesController');

// CRUD endpoints
router.post('/', coopGradesController.createCoopGrade);
router.get('/', coopGradesController.getCoopGrades);
router.get('/:studentID/:internshipID', coopGradesController.getCoopGrade);
router.delete('/:studentID/:internshipID', coopGradesController.deleteCoopGrade);

module.exports = router;