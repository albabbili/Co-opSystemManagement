const express = require('express');
const router = express.Router();
const coopSearchController = require('../controllers/coopSearchController');

// CRUD endpoints
router.post('/', coopSearchController.createCoopSearch);
router.get('/', coopSearchController.getCoopSearches);
router.get('/:employeeID/:companyID/:facultyID/:departmentID', coopSearchController.getCoopSearch);
router.delete('/:employeeID/:companyID/:facultyID/:departmentID', coopSearchController.deleteCoopSearch);

module.exports = router;